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
  }
});
module.exports = mongoose.model('Evidence', EvidenceSchema);

//evidence template {url:"",title:"",user:"",comment:"", supporting:false}
