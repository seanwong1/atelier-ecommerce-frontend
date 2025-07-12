const express = require('express');
const router = express.Router();

// Individual route modules
const productsRouter = require('./products');
const questionsRouter = require('./questions');
const answersRouter = require('./answers');
const reviewsRouter = require('./reviews');
const cartRouter = require('./cart');
const trackRouter = require('./track');

// Mount routers
router.use('/', productsRouter);
router.use('/questions', questionsRouter);
router.use('/answer', answersRouter);
router.use('/', cartRouter);
router.use('/', reviewsRouter);
route.use('/', trackRouter);

module.exports = router;