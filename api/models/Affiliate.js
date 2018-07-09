const { Schema, mongoose } = require("./db");
const passportLocalMongoose = require("passport-local-mongoose");

const Affiliate = new Schema({
  firstName: String,
  lastName: String,
  companyName: String,
  website: String,
  country: String,
  username: String,
  referralLink: String,
  leadCommission: Number,
  saleCommission: Number,
  currency: String,
  staffMember: String
});

Affiliate.plugin(passportLocalMongoose, {
  usernameField: "email"
});

module.exports = mongoose.model("Affiliate", Affiliate);
