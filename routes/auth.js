const express = require('express');
const router = express.Router();

// Controller
const AuthController = require('../controllers/auth');

// Routes
router.post('/login', (req, res, next) => AuthController.login({ req, res, next }));

module.exports = router;