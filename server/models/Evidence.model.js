const mongoose = require('mongoose');
const EvidenceSchema = new mongoose.Schema({
  url: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  user: {
    type: String,
    default: ''
  },
  comment: {
    type: String,
    default: ''
  },
  supporting: {
    type: Boolean,
    default: true
  },
  datePosted: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model('Evidence', EvidenceSchema);

//evidence template {url:"",title:"",user:"",comment:"", supporting:false}

// url:,
// title:,
// user:,
// comment:,
// supporting:,
// datePosted: