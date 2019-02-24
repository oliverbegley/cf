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
    default: ''
  },
});
module.exports = mongoose.model('Fact', FactSchema);