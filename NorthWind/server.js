require('C:/Code/NorthWind/Models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const productController = require('./Controller/ProductsController');
var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('Views', path.join(__dirname, '/Views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/Views/Layouts/'}));
app.set('view engine', 'hbs');
app.listen(3000, () =>{
    console.log('Express server started at port: 3000');
});

app.use('/products', productController);