var express = require('express'),
    restful = require('node-restful')
    mongoose = restful.mongoose;

var app = express();


mongoose.connect('mongodb://localhost/restful')

var ProductSchema = mongoose.Schema({
    name: String,
    sku: String,
    price: Number
})

var Products = restful.model('products',ProductSchema)
Products.methods(['get','post','put','delete']);
Products.register(app,'/api/products');


app.listen(3000)
console.log("Server is running")
