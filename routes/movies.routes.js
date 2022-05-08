const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

router.get("/movie", (req, res, next) => {
  Movie.find()
    .then((movieArr) => {
      console.log(movieArr);
      res.render("movies", {movieArr});
    })
    .catch((err) => {
      console.log(err);
    })
});

router.get("/movie/:id", (req, res) => {
    Movie.findById(req.params.id)
      .then((movieDetails) => {
        console.log("Detalles películas ", movieDetails);
        res.render("details", {movieDetails});
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  module.exports = router;

  