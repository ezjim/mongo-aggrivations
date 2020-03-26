const { Router } = require('express');
const Zoos = require('../models/Zoos');

module.exports = Router()
  .post('/', (req, res, next) => {
    Zoos
      .create(req.body)
      .then(zoo => res.send(zoo))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Zoos
      .findById(req.params.id)
      .populate('authorId')
      .then(zoo => res.send(zoo))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Zoos
      .find()
      .then(zoos => res.send(zoos))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Zoos
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(zoo => res.send(zoo))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Zoos
      .findByIdAndDelete(req.params.id)
      .then(zoo => res.send(zoo))
      .catch(next);
  });
  
