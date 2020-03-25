const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  zooId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'zoo',
    required: true
  },
  name: {
    type: String,
    required:true
  },
  count: {
    type: String,
    required: true
  },
});
module.exports = mongoose.model('Animal', schema);
