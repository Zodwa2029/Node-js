const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Warehouse', {useNewUrlParser: true}, (err) => {
    if (!err) {console.log('MongoDB connection successful')}
    else {console.log('Error on db connection : ' + err)}
});

require('C:/Code/NorthWind/Models/db');
const express = require('express');


