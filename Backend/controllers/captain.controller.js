const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async(req,res,next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  const {fullName,email,password,vehicle} = req.body;

  const isCaptainAlreadyExist = await captainModel.findOne({email});
  if(isCaptainAlreadyExist){
    return res.status(400).json({errors: [{msg: 'Captain already exists'}]});
  }
  try {
    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
      fullName: {
        firstName: fullName.firstName,
        lastName: fullName.lastName
      },
      email,
      password: hashedPassword,
      vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
      }
    });
    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(201).json({token, captain});
  } catch(err) {
    next(err);
  }
}

module.exports.loginCaptain = async(req,res,next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  }
  const {email,password} = req.body;
  const captain = await captainModel.findOne({email}).select('+password');
  if(!captain){
    return res.status(401).json({message: 'Invalid email or password'});
  }
  const isMatch = await captain.comparePassword(password);
  if(!isMatch){
    return res.status(401).json({message: 'Invalid email or password'});
  }
  const token = captain.generateAuthToken();
  res.cookie('token', token);
  res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async(req,res,next)=>{
  res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async(req,res,next)=>{
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({message: 'No token found'});
    }

    const existingToken = await blacklistTokenModel.findOne({token});
    if (existingToken) {
      return res.status(400).json({message: 'Token already invalidated'});
    }

    await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message: 'Logged out successfully'});
  } catch(err) {
    next(err);
  }
}
