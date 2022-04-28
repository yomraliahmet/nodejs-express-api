const express = require('express');
const router = express.Router();

// Controller
const ProductController = require('../controllers/order');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => ProductController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => ProductController.show({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => ProductController.store({ req, res, next }));

module.exports = router;