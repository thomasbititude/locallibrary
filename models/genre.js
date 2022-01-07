var bookshelf =  require('../bookshelf');

var Genre = bookshelf.model('Genre',{
    tableName: "genre",
    
  });

  
  module.exports = Genre;