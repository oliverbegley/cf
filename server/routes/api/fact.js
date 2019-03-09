const Fact = require("../../models/Fact.model");
let ObjectID = require("mongodb").ObjectID;

module.exports = app => {
  /*
   * Add a fact
   */
  const facts = [
    {
      title: "TestFact",
      userId: "",
      creationDate: "",
      subject:"Meme",
      upvoters: ["Peter", "Graham", "Joel"],
      downvoters: ["Saul", "Alex", "PublicEnemE"],
      evidence: ["evidence1", "evidence2", "evidence2"]
    },
    {
      title: "Another One",
      userId: "",
      creationDate: "",
      subject:"Sport",
      upvoters: ["Iain", "Craig", "Bob"],
      downvoters: ["Lain", "Garry", "Shaun"],
      evidence: ["e1", "e2", "e3"]
    },
    {
      title: "All you can hear is these YEOS",
      userId: "",
      creationDate: "",
      subject:"Politics",
      upvoters: ["Alan", "Alice", "Arvile"],
      downvoters: ["Adonis", "Arge", "Axl"],
      evidence: ["d1", "d2", "dnsands"]
    }
  ];

  const testing = 'please fucking work';

  //Get all facts
  app.get("/api/fact/facts", (req, res, next) => {
    return res.send({
      facts
    });
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
