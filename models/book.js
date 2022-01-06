var bookshelf =  require('../bookshelf');
const Auther = require('../models/auther')
var Book = bookshelf.Model.extend({
    tableName: "book",
    authers(){
      return this.hasOne(Auther,'auther_id','auther_id');
    }
  });

  
  module.exports = Book;
