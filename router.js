const express = require('express');
const controllerProduto = require('./controlers/ProdutoController');

const routes = express.Router();

routes.get('/List',controllerProduto.List);

routes.post('/Create',controllerProduto.Create);

routes.post('/Updade',controllerProduto.Update);

routes.get('/GetOne',controllerProduto.GetOne);

routes.post('/Delete',controllerProduto.Delete);

module.exports = routes;