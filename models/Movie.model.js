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
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
})

const MovieModel = model("movie", moviesSchema);

module.exports = MovieModel;