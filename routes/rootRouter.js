const express = require('express');
const rootRouter = express.Router();

// Add all routes
rootRouter.use('/api', require('./api/apiRouter'));

module.exports = rootRouter;
