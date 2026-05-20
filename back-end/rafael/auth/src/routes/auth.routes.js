const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth.controller');

router.post('/registrar', controllers.registrar);
router.post('/login', controllers.login);

module.exports = router;