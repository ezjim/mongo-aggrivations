const Zoo = require('../lib/models/Zoos');
const Animals = require('../lib/models/Animals');
const chance = require('chance').Chance();
// specifying the number of zoos to create with our seed function
module.exports = async({ zoosToCreate = 10, animalsToCreate = 100 } = {}) => {
  // creating zoos
  // creating an array of zoosToCreate length
  // map through the array
  // -> for each item in the array we create an object with { handle, text }
  // for each tweet in the mapped array we create a tweet in our mongodb

  
  const zoos = await Zoo.create([...Array(zoosToCreate)].map(() => ({
    name: chance.name(),
    address: chance.address({ short_suffix: true })
  })));

  await Animals.create([...Array(animalsToCreate)].map(() => ({
    zooId: chance.pickone(zoos)._id,
    name: chance.animal(),
    count: chance.integer({ min: 0, max: 60 })
  })));
};

