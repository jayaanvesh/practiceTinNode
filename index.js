var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/jayatinda");

var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(cors());

var sellersAPI = require('./server/route/seller');

app.post('/seller', sellersAPI.sellers);
app.get('/sellerlist', sellersAPI.sellersList);



app.listen(8000, ()=>{
    console.log(
        " " + '\n' +
        "******************************************************************" + '\n' +
        "*                                                                *" + '\n' +
        "*                                                                *" + '\n' +
        "*  ========== Tinda Back-End Started on Port No.8000 ==========  *" + '\n' +
        "*                                                                *" + '\n' +
        "*                                                                *" + '\n' +
        "******************************************************************" + '\n' +
        " " + '\n'
    );
});
