'use strict';
const mongoose = require('mongoose');
//conect to DB or testDB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://akholod:tracemode@ds115110.mlab.com:15110/text-tagger');

//create db connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
console.log('moongoose connect');

module.exports = db;
