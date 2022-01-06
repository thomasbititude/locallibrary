//var bookshelf =  require('../bookshelf');
var express = require('express');
const { request } = require('../app');
var router = express.Router();
var Book = require('../models/book')
 var bodyParser = require("body-parser");
 router.use(bodyParser.urlencoded({ extended: true }));

// var Book = bookshelf.Model.extend({
//     tableName: "book"
//   });

  router.get("/", async (req, res) => {
    var books = await new Book().fetchAll(
      {withRelated : ['genres']}
    );
    res.json(books);
  });
  router.get("/:id", async (req, res) => {
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
