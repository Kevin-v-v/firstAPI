const express = require('express');

let RegistrationsController = require('../controllers/registrations_controller');
let router = express.Router();

router.route('/users').post(RegistrationsController.new);

module.exports = router;