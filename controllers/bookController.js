
var Book = require('../models/book');
var Auther = require('../models/auther');
var Genre = require('../models/genre')

 
exports.index = async(req,res) => {
    const [book_count, auther_count,genre_count]= await Promise.all([Book.count(), Auther.count(),Genre.count()]);
    res.render('index', { title: 'LocalLibrary',book_count,auther_count,genre_count });

    };


exports.book_list =  async (req, res) => {
  var books = await new Book().fetchAll(
  );
  res.json(books);
};
// router.get("/auther", async (req, res) => {
//   var books = await new Book().fetchAll(
//     {withRelated : ['authers']}
//   );
//   res.json(books);
// });
//   router.get("/genre", async (req, res) => {
//     var books = await new Book().fetchAll(
//       {withRelated : ['genres']}
//     );
//     res.json(books);
//   });
exports.book_id =  async (req, res) => {
    var books = await  new Book().where('id',parseInt(req.params.id)).fetch(

    );
    res.json(books);
  };
//   router.get("/auther/:id", async (req, res) => {
//     var books = await  new Book().where('id',parseInt(req.params.id)).fetch(
//       {withRelated : ['authers']}

//     );
//     res.json(books);
//   });
//   router.get("/genre/:id", async (req, res) => {
//     var books = await  new Book().where('id',parseInt(req.params.id)).fetch(
//       {withRelated : ['genres']}

//     );
//     res.json(books);
//   });

exports.book_post = async(req,res)=>{
      var books = await  Book.forge(
            {...req.body}
      ).save();
      res.json(books);
  };

  exports.book_put = async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).save(
        {...req.body},
        { patch: true }
        );
    res.json(books);  
  };

  exports.book_delete =  async (req, res) => {
    var books = await  Book.where('id',parseInt(req.params.id)).destroy();
    res.json(books);  
  };

  


