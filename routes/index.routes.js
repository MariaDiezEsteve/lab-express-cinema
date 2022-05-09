const express = require('express');
const { route } = require('../app');
const router = express.Router();

const MoviesModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) => {
    MoviesModel.find()
    .then((movie)=> {
        console.log(movie)
        res.render("movies/movies.hbs", {
        moviesInfo: movie
        })
    })
    .catch((error) => {next(error)}) 
})

router.get("/movies/:id", (req, res, next) => {
    const { id } = req.params
console.log("id")
    MoviesModel.findById(id)
    .then((idMovies) =>{      
        res.render("movies/moviesdetalle.hbs", {
            idMovies
        })

    })
    .catch((err) => {
        next(err)
      })     
})

module.exports = router;