var Auther = require('../models/auther')

exports.auther_list =  async (req, res) => {
    var authers = await new Auther().fetchAll(

    );
    res.json(authers);
  };
//   router.get("/book", async (req, res) => {
//     try{var authers = await new Auther().fetchAll(
//       {withRelated : ['books']}

//       );
//       res.json(authers);
//   } catch(e) {

//     console.log(`Failed to fetch data: ${e}`);
// }});

exports.auther_id =  async (req, res) => {
    var authers = await   Auther.where('auther_id',parseInt(req.params.id)).fetch(

    );
    res.json(authers);
  };

//   router.get("/book/:id", async (req, res) => {
//     var authers = await   Auther.where('auther_id',parseInt(req.params.id)).fetch(
//       {withRelated : ['books']}

//     );
//     res.json(authers);
//   });

exports.auther_post = async(req,res)=>{
    var authers = await  Auther.forge(
      {...req.body},
    { patch: true }
    ).save();
    res.json(authers);
};

exports.auther_put =  async (req, res) => {
  var authers = await  Auther.where('auther_id',parseInt(req.params.id)).save(
      {...req.body},
      { patch: true }
      );
  res.json(authers);  
};

exports.auther_delete =  async (req, res) => {
  var authers = await  Auther.where('auther_id',parseInt(req.params.id)).destroy();
  res.json(authers);  
};


  //module.exports = router;