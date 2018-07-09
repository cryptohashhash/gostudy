const Lead = require("../models/Lead");

Lead.create([
  {
    firstName: "Alex",
    lastName: "Johnson",
    ipCountry: "Italy",
    nationality: "Austria",
    leadDate: new Date("2018-04-03T00:00:00Z"),
    saleDate: new Date("2018-06-02T00:00:00Z"),
    affiliateUsername: "coolblogs123"
  },
  {
    firstName: "Rachel",
    lastName: "Lee",
    ipCountry: "France",
    nationality: "France",
    leadDate: new Date("2018-06-13T00:00:00Z"),
    saleDate: new Date("2018-07-01T00:00:00Z"),
    affiliateUsername: "travelblog456"
  }
]);
