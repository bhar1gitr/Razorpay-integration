const express = require('express');
const router = express.Router();
const {checkout} = require('../controllers/paymentController.js');

// router.route('/checkout').post(checkout);

module.exports = router;