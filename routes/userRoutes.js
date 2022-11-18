'use strict';

const express = require('express');
const authController = require('../controllers/authController');
const viewsController = require('../controllers/viewsController');


const router = express.Router();

router
    .route('/signup')
    .get(viewsController.getSignInForm)
    .post(authController.register, viewsController.getLandingPAge);

router
    .route('/login')
    .get(viewsController.getLoginForm)
    .post(viewsController.getLandingPAge);

// router
//     .route('/allUsers')
//     .get(viewsController.getAllUsers)
    
module.exports = router;
