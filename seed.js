equire('dotenv').config();

require('./lib/utils/connect')();

const seedData = require('./db/seed');

module.exports = async({ zoosToCreate: 69, animalsToCreate: 666 }
  .then(() => console.log('done')));
