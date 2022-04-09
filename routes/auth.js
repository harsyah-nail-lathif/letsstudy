const express = require('express');
const router = express.Router();
const authController = require('../controller/AuthController');

router.post('/register', authController.register)
router.post('/login', authController.login)

model.export = router