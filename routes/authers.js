var express = require('express');
const { request } = require('../app');
var router = express.Router();
var Auther = require('../models/auther')
 var bodyParser = require("body-parser");
 router.use(bodyParser.urlencoded({ extended: true }));

 router.get("/", async (req, res) => {
    var authers = await new Auther().fetchAll();
    res.json(authers);
  });

  router.get("/:id", async (req, res) => {
    var authers = await  new Auther().where('auther_id',parseInt(req.params.id)).fetch();
    res.json(authers);
  });

  router.post("/",async(req,res)=>{
    var authers = await  Auther.forge(
      {...req.body},
    { patch: true }
    ).save();
    res.json(authers);
});

router.put("/:id", async (req, res) => {
  var authers = await  Auther.where('auther_id',parseInt(req.params.id)).save(
      {...req.body},
      { patch: true }
      );
  res.json(authers);  
})
router.delete("/:id", async (req, res) => {
  var authers = await  Auther.where('auther_id',parseInt(req.params.id)).destroy();
  res.json(authers);  
})
  module.exports = router;