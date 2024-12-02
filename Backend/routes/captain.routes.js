const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('fullName.firstName').isLength({min: 3}).withMessage('Name must be at least 3 characters long'),
    body('fullName.lastName').isLength({min: 3}).withMessage('Last name must be at least 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 6}).withMessage('Plate must be at least 6 characters long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage('Invalid vehicle type')
],
captainController.registerCaptain
);

module.exports = router;
