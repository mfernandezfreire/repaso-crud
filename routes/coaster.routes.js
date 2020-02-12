const express = require('express')
const router = express.Router()
const Park = require("../models/Park.model");
const Coaster = require("../models/Coaster.model")

// Aquí los endpoints
router.get('/new', (req, res, next) => {
    Park.find()
    .then((park) => {
    res.render('coasters/new-coaster.hbs', {park});
    })
  });

router.post("/new", (req, res) => {
    const {name,description, length,inversions, active, park} = req.body
    Coaster.create({
        name,description, length,inversions, active, park
      })
      .then(res.redirect('/coasters/new'))
      .catch(res.redirect('/coaster/new', {
        error: `There was an error trying to create`
      }));
  });

  router.get('/', (req, res, next) => {
    Coaster.find()
    .then((coaster) => {
    res.render('coasters/coasters-index.hbs', {coaster});
    })
  });

module.exports = router

//name: {type: String},
// description: {type: String},
// length: {type: Number},
// inversions: {type: Number},
// active: {type: Boolean},
// park: { type: Schema.ObjectId, ref: 'Park' } 