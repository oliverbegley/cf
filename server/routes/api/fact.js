const Fact = require("../../models/Fact.model");
const Evidence = require("../../models/Evidence.model")
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

  app.post("/api/fact/:id/evidence",(req,res,next) => {
    var id = req.params.id;

    var evidence = new Evidence();
    evidence.url = req.body.url;
    evidence.title = req.body.title;
    evidence.user = req.body.user;
    evidence.comment = req.body.comment;
    evidence.supporting = req.body.supporting;
    evidence.date = Date.now();

    var id = req.params.id;
    if(!evidence.title){
      return res.send({
        success: false,
        message: 'Error: title must be at least 250.'
      })
    }
    if(!evidence.url){
      return res.send({
        success: false,
        message: 'Error: url cannot be blank.'
      })
    }
    if(!evidence.comment){
      return res.send({
        success: false,
        message: 'Error: comment cannot be blank.'
      })
    }
    if(!evidence.supporting){
      return res.send({
        success: false,
        message: 'Error: supporting/opposing evidence cannot be blank.'
      })
    }

    Fact.findOne({_id: ObjectID(id)})
    .exec()
    .then(function(fact){
      fact.evidence.push(evidence);
      fact.save();
    });
    return res.send({
      success: true,
      message: 'success',
      evidence: evidence
    })
  })
};
