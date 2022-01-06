var bookshelf =  require('../bookshelf');

var Genre = bookshelf.Model.extend({
    tableName: "genre",
    
  });

  
  module.exports = Genre;