const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
// const authMiddleware = require('../middleware/auth')

router.get("/leads", (req, resp) => {
  // Get all leads out of the database
  Lead.find({}).then(leads => {
    resp.json(leads);
  });
});

router.get("/leads/:id", (req, resp) => {
  const id = req.params.id;
  Lead.findById(id).then(lead => {
    resp.json(lead);
  });
});

module.exports = router;
