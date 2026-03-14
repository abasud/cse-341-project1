const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello world!")
})

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/contacts', require('./contacts'));

module.exports = router;