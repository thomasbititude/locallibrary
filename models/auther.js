var bookshelf =  require('../bookshelf');

var Auther = bookshelf.model("Auther",{
    tableName: "authers",
    idAttribute:'auther_id',
    books(){
        return this.hasMany('Book','auther_id','auther_id');
      }
  });
  
  module.exports = Auther;
