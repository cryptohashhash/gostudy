const { Schema, mongoose } = require("./db");

const Lead = new Schema({
  firstName: String,
  lastName: String,
  ipCountry: String,
  nationality: String,
  leadDate: Date,
  saleDate: Date,
  affiliateUsername: String
});

module.exports = mongoose.model("Lead", Lead);
