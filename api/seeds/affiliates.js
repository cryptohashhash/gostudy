const Affiliate = require("../models/Affiliate");

Affiliate.create([
  {
    firstName: "Joe",
    lastName: "Bloggs",
    companyName: "Cool Blogs",
    website: "www.coolblogs.com",
    country: "Italy",
    username: "coolblogs123",
    referralLink:
      "https://www.gostudy.it/?utm_medium=Referrals&utm_campaign=coolblogs123",
    leadCommission: 5,
    saleCommission: 0,
    currency: "Euros",
    staffMember: "Mary Lee",
    email: "joe@coolblogs.com"
  },
  {
    firstName: "Steve",
    lastName: "Smith",
    companyName: "Travel Blog",
    website: "www.travelblog.com",
    country: "France",
    username: "travelblog456",
    referralLink:
      "https://www.gostudy.fr/?utm_medium=Referrals&utm_campaign=travelblog456",
    leadCommission: 0,
    saleCommission: 10,
    currency: "Euros",
    staffMember: "Mary Lee",
    email: "steve@travelblog.com"
  }
]);
