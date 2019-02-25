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
});
module.exports = mongoose.model('Evidence', EvidenceSchema);