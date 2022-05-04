const express = require('express');
const router = express.Router();

// Controller
const AuthController = require('../controllers/auth');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.post('/login', (req, res, next) => AuthController.login({ req, res, next }));
router.post('/refresh_token', (req, res, next) => AuthController.refreshToken({ req, res, next }));
router.post('/logout', verifyToken, (req, res, next) => AuthController.logout({ req, res, next }));

module.exports = router;