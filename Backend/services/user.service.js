const userModel = require('../models/user.model');

module.exports.createUser = async({
    firstName,lastName,email,password
})=>{
    if(!firstName || !email || !password){
        throw new Error('all fields are required');
    }
    const user = userModel.create({
        fullName:{
            firstName,
            lastName
        },
        email,
        password
    })
    return user;
}