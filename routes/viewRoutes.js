const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');


const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/login', viewsController.getLoginForm, authController.sign_in);
router.get('/signup', viewsController.getSignInForm, authController.register);
router.get('/loginUser', viewsController.getLoginUser, authController.loginRequired);
router.get('/loans/list', viewsController.getLoanList, authController.loginRequired);
router.get('/customers/list', viewsController.getCustomerList, authController.loginRequired);
//router.get('/userList', viewsController.getAllUsers, authController.loginRequired)



module.exports = router;
