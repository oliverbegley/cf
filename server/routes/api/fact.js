const Fact = require("../../models/Fact.model");
const Evidence = require("../../models/Evidence.model");
const UserSession = require("../../models/UserSession.model");
let ObjectID = require("mongodb").ObjectID;

module.exports = app => {
  /*
   * Add a fact
   */

  app.get("/api/fact/recent/:num", (req, res, next) => {
    var num = parseInt(req.params.num);
    Fact.find()
      .sort([["creationDate", -1]])
      .limit(num)
      .exec()
      .then(fact => res.json(fact))
      .catch(err => next(err));
  });

  app.get("/api/fact/:id", (req, res, next) => {
    var id = req.params.id;
    Fact.findOne({ _id: ObjectID(id) })
      .exec()
      .then(fact => res.json(fact))
      .catch(err => next(err));
  });

  app.post("/api/fact/facts", (req, res, next) => {
    var fact = new Fact();
    fact.title = req.body.title;
    fact.userId = req.body.userId;
    fact.creationDate = Date.now();
    fact.subject = req.body.subject;
    fact.description = req.body.description;

    if (!fact.title) {
      return res.send({
        success: false,
        message: "Error: Title cannot be blank."
      });
    }
    if (!fact.subject) {
      return res.send({
        success: false,
        message: "Error: Subject cannot be blank."
      });
    }
    if (!fact.description) {
      return res.send({
        success: false,
        message: "Error: description must be at least 200 characters."
      });
    }

    fact.save(function(err) {
      if (err) {
        res.json(err);
      }

      res.json({ message: "Success fact added", data: fact });
    });
  });

  app.post("/api/fact/:id/evidence", (req, res, next) => {
    var id = req.params.id;

    var evidence = new Evidence();
    evidence.url = req.body.url;
    evidence.title = req.body.title;
    evidence.user = req.body.user;
    evidence.comment = req.body.comment;
    evidence.supporting = req.body.supporting;
    evidence.date = Date.now();

    var id = req.params.id;
    if (!evidence.title) {
      return res.send({
        success: false,
        message: "Error: title must be at least 250."
      });
    }
    if (!evidence.url) {
      return res.send({
        success: false,
        message: "Error: url cannot be blank."
      });
    }
    if (!evidence.comment) {
      return res.send({
        success: false,
        message: "Error: comment cannot be blank."
      });
    }
    if (!evidence.supporting) {
      return res.send({
        success: false,
        message: "Error: supporting/opposing evidence cannot be blank."
      });
    }

    Fact.findOne({ _id: ObjectID(id) })
      .exec()
      .then(function(fact) {
        fact.evidence.push(evidence);
        fact.save();
      });
    return res.send({
      success: true,
      message: "success",
      evidence: evidence
    });
  });

  app.get("/api/fact/:queryname/:querysubject", (req, res, next) => {
    var queryname = req.params.queryname;
    var querysubject = req.params.querysubject;
    var num = parseInt(req.params.num);
    Fact.find({ title: queryname })
      .sort([["creationDate", -1]])
      .limit(10)
      .exec()
      .then(facts => res.json(facts))
      .catch(err => next(err));
  });

  app.get("/api/fact/", (req, res, next) => {
    let subject = req.query.subject;
    let searchstring = req.query.searchstring;

    Fact.find({ subject: subject })
      .sort([["creationDate", -1]])
      .limit(10)
      .exec()
      .then(facts => res.json(facts))
      .catch(err => next(err));
  });

  app.post("/api/fact/:factid/vote", (req, res, next) => {
    var factId = req.params.factid;
    var vote = req.body.vote;
    var token = req.body.token;
    var userId = "";

    UserSession.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        if (sessions.length != 1) {
          return res.send({
            success: false,
            message: "Error: Invalid"
          });
        } else {
          // DO ACTION
          userId = sessions[0].userId;
          Fact.findOne({ _id: ObjectID(factId) })
            .exec()
            .then(function(fact) {
              if (fact.upvoters.includes(userId)) {
                fact.upvoters.remove(userId);
              }
              if (fact.downvoters.includes(userId)) {
                fact.downvoters.remove(userId);
              }
              if (vote === "up") {
                fact.upvoters.push(userId);
              }
              if (vote === "down") {
                fact.downvoters.push(userId);
              }
              fact.save();
              return res.send({
                success: true,
                message: "vote submitted",
                vote: vote
              });
            })
            .catch(err => next(err));
        }
      }
    );
  });

  app.get("/api/getfactsuserposted", (req, res, next) => {
    let postUserId = req.query.postuserid;
    Fact.find({ userId: postUserId })
      .sort([["creationDate", -1]])
      .limit()
      .exec()
      .then(fact => res.json(fact))
      .catch(err => next(err));
  });

  app.get("/api/getfactsuservoted", (req, res, next) => {
    let voteUserId = req.query.voteuserid;
    Fact.find({ $or: [{ upvoters: voteUserId }, { downvoters: voteUserId }] })
      .sort([["creationDate", -1]])
      .limit()
      .exec()
      .then(fact => res.json(fact))
      .catch(err => next(err));
  });
};
