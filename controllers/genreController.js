
var Genre = require('../models/genre')
 


 exports.genre_list = async (req, res) => {
    var genres = await new Genre().fetchAll();
    res.json(genres);
  };
  exports.genre_id =  async (req, res) => {
    var genres = await  new Genre().where('id',parseInt(req.params.id)).fetch();
    res.json(genres);
  };

  exports.genre_post = async(req,res)=>{
      var genres = await  Genre.forge(
        {...req.body}
   
      ).save();
      res.json(genres);
  };

  exports.genre_put =  async (req, res) => {
    var genres = await  Genre.where('id',parseInt(req.params.id)).save(
        {...req.body},
        { patch: true }
        );
    res.json(genres);  
  };
  
  exports.genre_delete =  async (req, res) => {
    var genres = await  Genre.where('id',parseInt(req.params.id)).destroy();
    res.json(genres);  
  };


