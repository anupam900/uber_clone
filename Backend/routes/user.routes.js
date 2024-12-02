const express = require('express');
const router = express.Router();
const{body} = require('express-validator');// destructuring to import it directly otherwise use expressValidator.body each time
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register',[body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('first name should be more than 3 characters long'),
    body('fullName.firstName').isLength({min:6}).withMessage('first name should be more than 6 characters long')
], 
userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password should be more than 6 characters long')
],
userController.loginUser
)
router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout', authMiddleware.authUser, userController.logoutUser);
module.exports = router;