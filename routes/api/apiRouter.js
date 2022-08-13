const express = require('express');
const apiRouter = express.Router();

apiRouter.use('/test', require('./routes/test'));

module.exports = apiRouter;