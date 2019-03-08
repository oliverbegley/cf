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
    Fact.find({_id: ObjectID(id)})
    .exec()
    .then((fact) => res.json(fact))
    .catch((err) => next(err));
  });
};
