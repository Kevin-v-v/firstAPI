const express = require('express');
const sessionsController = require('../controllers/sessions_controller')
let router = express.Router();

router.route('/sessions').post(sessionsController.create);

module.exports = router;