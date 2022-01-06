var bookshelf =  require('../bookshelf');

var Auther = bookshelf.Model.extend({
    tableName: "authers",
    idAttribute:'auther_id'
    // books(){
    //     return this.belongsToMany('Book');
    //   }
  });
  
  module.exports = Auther;
