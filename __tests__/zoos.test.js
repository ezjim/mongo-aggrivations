const { getZoo, getZoos, getAnimal } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
  
describe('zoo routes', () => {

  it('creates a zoo', async() => {
    // const animal = await getAnimal();

    return request(app)
      .post('/api/v1/zoos')
      .send({
        name: 'OR Zoo',
        address: 'this is a test address'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'OR Zoo',
          address: 'this is a test address',
          __v: 0
        });
      });
  });
 
  // it('gets a zoo by id', async() => {


 
  //   const zoo = await getZoo();
  //   const animal = await getAnimal({ animalId: animal._id });
   

  //   return request(app)
  //     .get(`/api/v1/zoos/${zoo._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...zoo,
          
  //       });
  //     });
  // });
});

    

