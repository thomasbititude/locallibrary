var express = require('express');
var router = express.Router();
var Genre = require('../models/genre')
 


 router.get("/", async (req, res) => {
    var genres = await new Genre().fetchAll();
    res.json(genres);
  });
  router.get("/:id", async (req, res) => {
    var genres = await  new Genre().where('id',parseInt(req.params.id)).fetch();
    res.json(genres);
  });

  router.post("/",async(req,res)=>{
      var genres = await  Genre.forge(
        {...req.body}
   
      ).save();
      res.json(genres);
  });

  router.put("/:id", async (req, res) => {
    var genres = await  Genre.where('id',parseInt(req.params.id)).save(
        {...req.body},
        { patch: true }
        );
    res.json(genres);  
  })
  router.delete("/:id", async (req, res) => {
    var genres = await  Genre.where('id',parseInt(req.params.id)).destroy();
    res.json(genres);  
  })


 module.exports = router;
