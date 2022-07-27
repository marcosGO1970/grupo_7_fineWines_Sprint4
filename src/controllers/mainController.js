//const path = require('path');
//Fuentes de datos
const products = require ('../dataBase/products.js')


//Objeto literal mainController
//Viene de mainRouter a cada modulo
const mainController = {
    index: (req,res) => {
        res.render('index', {products});
    },
    productCart: (req,res) => {
        res.render('productCart');
    },
    login: (req, res) => {
        res.render('users/login.ejs');
    },
    register:(req, res) => {
        res.render('users/register.ejs');
    },
    productDetail: (req,res) => {
        const id = Number(req.params.id);
        const product = products.find( product => product.id === id);

        res.render('productDetail', {product});
    }
}

module.exports = mainController