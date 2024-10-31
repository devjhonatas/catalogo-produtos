const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});