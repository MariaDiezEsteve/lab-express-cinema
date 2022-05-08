const {Schema , model} = require("mongoose")

const moviesSchema = new Schema ({
    title: {
        type: String,
    },
    director: {
        type: String
    },
    star: {
        type: [String]
    },
    image: {
        type: String
    },
    descrition: {
        type: String
    },
    showtimes: {
        type: [String]
    }
})

const Movie = ("movie", moviesSchema);

module.exports = Movie;