require('dotenv').config();
const express       = require('express')
const app           = express();
const bodyParser    = require('body-parser');
const helmet        = require('helmet');
const swaggerJsdoc  = require('swagger-jsdoc');
const swaggerUi     = require('swagger-ui-express');
const sequelize     = require('./config/db').Sequelize;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/json'
}));
app.use(helmet());

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'MS-ACCOUNT API',
      version: '1.0.0',
      // description: 'MS-ACCOUNT API',
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./api/v1/*/index.js'],
}

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', require('./routes'))

app.use((req, res, next) => {
  const err = new Error('Route Not Found')
  res.status(err.status || 404);
  res.json({
    message: err.message,
    error: true,
  })
})

module.exports = app;