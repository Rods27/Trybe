const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productControllers');
const usersController = require('./controllers/usersControllers');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products/', productController);

app.use('/users/', usersController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});