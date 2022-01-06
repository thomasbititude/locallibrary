const knex = require('knex')({
    client:'mysql2',
    connection:{
        host : 'localhost',
        user : "thomas",
        password : "password",
        database : 'locallibrary',
        charset : 'utf8'
    },
    debug:true
}
)
//const bookshelf = require('bookshelf')("knex");
module.exports = require('bookshelf')(knex);
