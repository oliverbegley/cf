const mongoose = require('mongoose');
const FactSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  userId: {
    type: String,
    default: ''
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
  subject:{
    type: String,
    default:''
  },
  description:{
    type: String,
    default: ''
  },
  upvoters: {
    type: Array,
    default: []
  },
  downvoters: {
    type: Array,
    default: []
  },
  evidence: {
    type: Array,
    default: []
  }
});
module.exports = mongoose.model('Fact', FactSchema);