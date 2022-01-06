var bookshelf =  require('../bookshelf');
const Auther = require('../models/auther');
const Genre = require('../models/genre');

var Book = bookshelf.Model.extend({
    tableName: "book",
    authers(){
      return this.hasOne(Auther,'auther_id','auther_id');
    },

    genres(){
      return this.hasOne(Genre,"id","genre_id");
    }
  });

  
  module.exports = Book;
