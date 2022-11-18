const express = require('express');
const ledgerController = require('../controllers/ledgerController');
const authController = require('../controllers/authController');
const router = express.Router();

router
  .route('/ledger')
  .get(authController.loginRequired, ledgerController.getAllLedgers)
  .post(authController.loginRequired, ledgerController.createLedger);

router
  .route('/ledger:id')
  .get(authController.loginRequired, ledgerController.getLedger)
  .patch(authController.loginRequired, ledgerController.updateLedger)
  .delete(authController.loginRequired, ledgerController.deleteLedger);

module.exports = router;
