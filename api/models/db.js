const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/gostudy");

module.exports = { mongoose, Schema };
