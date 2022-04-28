const express = require('express');
const router = express.Router();

// Controller
const UserController = require('../controllers/user');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => UserController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => UserController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => UserController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => UserController.remove({ req, res, next }));
router.post('/', (req, res, next) => UserController.store({ req, res, next }));

module.exports = router;