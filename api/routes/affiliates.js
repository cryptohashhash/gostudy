const express = require("express");
const router = express.Router();
const Affiliate = require("../models/Affiliate");
// const authMiddleware = require('../middleware/auth')

router.get("/affiliates", (req, resp) => {
  // Get all affiliates out of the database
  Affiliate.find({}).then(affiliates => {
    resp.json(affiliates);
  });
});

router.get("/affiliates/:id", (req, resp) => {
  const id = req.params.id;
  Affiliate.findById(id).then(affiliate => {
    resp.json(affiliate);
  });
});

router.post("/affilates", (req, resp) => {
  const affiliate = req.body;
  Affiliate.create(affiliate).then(affiliate => {
    resp.json(affiliate);
  });
});

module.exports = router;
