const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
      // delete ret.__v;
    }
  }
});
schema.virtual('animals', {
  ref: 'Animal',
  localField: '_id',
  foreignField: 'zooId'
});

// schema.pre('validate', function(next) {
//   if(this.text) return next();
// });

module.exports = mongoose.model('Zoos', schema);
