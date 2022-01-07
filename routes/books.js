var express = require('express');
var router = express.Router();
var Book = require('../models/book')
 
router.get("/", async (req, res) => {
  var books = await new Book().fetchAll(
  );
  res.json(books);
});
router.get("/auther", async (req, res) => {
  var books = await new Book().fetchAll(
    {withRelated : ['authers']}
  );
  res.json(books);
});
  router.get("/genre", async (req, res) => {
    var books = await new Book().fetchAll(
      {withRelated : ['genres']}
    );
    res.json(books);
  });
  router.get("/:id", async (req, res) => {
    var books = await  new Book().where('id',parseInt(req.params.id)).fetch(

    );
    res.json(books);
  });
  router.get("/auther/:id", async (req, res) => {
    var books = await  new Book().where('id',parseInt(req.params.id)).fetch(
      {withRelated : ['authers']}

    );
    res.json(books);
  });
  router.get("/genre/:id", async (req, res) => {
    var books = await  new Book().where('id',parseInt(req.params.id)).fetch(
      {withRelated : ['genres']}

    );
    res.json(books);
  });

  router.post("/",async(req,res)=>{
      var books = await  Book.forge(
            {...req.body}
      ).save();
      res.json(books);
  });

  router.put("/:id", async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).save(
        {...req.body},
        { patch: true }
        );
    res.json(books);  
  })
  router.delete("/:id", async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).destroy();
    res.json(books);  
  })

  


  module.exports = router;
