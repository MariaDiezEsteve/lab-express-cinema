const express = require('express');
const router = express.Router();

/* GET home page */

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/movie", (req, res, next) => {
  Movie.find()
    .then((movie) => {
      console.log(movie);
      res.render("/movies.hbs");
    })
    .catch((err) => {
      next(err)
    }) 
});

router.get("/movie/:id"/details, (req, res, next) => {
  const {id} = req.params

    Movie.findById(id)
      .then((movieDetails) => {
        console.log(movieDetails);
        res.render("details", {
          detailsBook: book});
      })
      .catch((err) => {
        next(err)
      }) 
  });
  

module.exports = router;