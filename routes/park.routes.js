const express = require('express')
const router = express.Router()
const Park = require("../models/Park.model");

// Aquí los endpoints
router.get('/new', (req, res, next) => {
    res.render('parks/new-park.hbs');
  });

router.post("/new", (req, res) => {
    const {name,description} = req.body
    console.log(name,description)
    Park.create({
        name,description
      })
      .then(res.redirect('/parks/new'))
      .catch(res.redirect('/parks/new', {
        error: `There was an error trying to create`
      }));
  });


module.exports = router