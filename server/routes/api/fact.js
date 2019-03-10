const Fact = require("../../models/Fact.model");
let ObjectID = require("mongodb").ObjectID;

module.exports = app => {
  /*
   * Add a fact
   */

  app.get("/api/fact/recent/:num", (req,res, next)=>{
    var num = parseInt(req.params.num);
    Fact.find().sort([['creationDate', -1]]).limit(num)
    .exec()
    .then((fact)=> res.json(fact))
    .catch((err)=>next(err));
  });

  app.get("/api/fact/:id", (req, res, next) => {
    var id = req.params.id;
    Fact.findOne({_id: ObjectID(id)})
    .exec()
    .then((fact) => res.json(fact))
    .catch((err) => next(err));
  });

  app.post("/api/fact/facts",(req,res,next) => {
    var fact = new Fact();
    fact.title = req.body.title;
    fact.userId = req.body.userId;
    fact.creationDate = Date.now();
    fact.subject = req.body.subject;
    fact.description = req.body.description;

    if(!fact.title){
      return res.send({
        success: false,
        message: 'Error: Title cannot be blank.'
      })
    }
    if(!fact.subject){
      return res.send({
        success: false,
        message: 'Error: Subject cannot be blank.'
      })
    }
    if(!fact.description){
      return res.send({
        success: false,
        message: 'Error: description must be at least 200 characters.'
      })
    }

    fact.save(function (err){
      if(err){
        res.json(err);
      }
      
      res.json({message:'Success fact added',data: fact});
    });
  });
};
