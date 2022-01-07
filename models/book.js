var bookshelf =  require('../bookshelf');


var Book = bookshelf.model('Book',{
    tableName: "book",
    authers(){
      return this.hasMany('Auther','auther_id','auther_id');
    },

    genres(){
      return this.hasOne('Genre',"id","genre_id");
    }

  });

  
  module.exports = Book;
