'use strict';

const express = require('express');
const authController = require('../controllers/authController');
const loanController = require('../controllers/loanController');

const router = express.Router();

    router
    .route('/loan/list')
    .get(authController.loginRequired, loanController.getAllLoans)
    .post(authController.loginRequired, loanController.createLoan);
  
router
    .route('/loan:id')
    .get(authController.loginRequired, loanController.getLoan)
    .patch(authController.loginRequired, loanController.updateLoan)
    .delete(authController.loginRequired, loanController.deleteLoan);

module.exports = router;