'use strict';
const mongoose = require("mongoose");
require("../../db");

//tag schema
let Schema = mongoose.Schema;
let tagSchema = new Schema({
    tagName: { type: String, required: true, unique: true}
});

module.exports = mongoose.model('tags', tagSchema);
