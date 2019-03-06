const Fact = require("../../models/Fact.model");

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

  //Get all facts
  app.get("/api/fact/facts", (req, res, next) => {
    return res.send({
      facts
    });
  });

  app.post("/api/fact/add", (req, res, next) => {
    return res.send({
      facts
    }); // end of sign up endpoint
  });

  //Get Fact by ID
  // app.get("/api/fact/:id", req,res,next) => {
  //   Fact.find({
  //     email: email
  //   }


  // }
};
