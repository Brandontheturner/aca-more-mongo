const express = require('express')
const router = express.Router()
const TicketsController = require('../controllers/tickets')

// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get("/", (request, response) => {
    TicketsController.getAll().then(results => response.json(results));
});

// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post("/", (request, response) => {
    TicketsController.createMovie(request.body).then((res) => response.json(res));
});


// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete('/:movieName', (request, response) => {
    TicketsController.deleteMovie(request.params.movieName).then((res) => response.json(res))
});

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller
router.get('/:_id', (request, response) => {
    TicketsController.getById(request.params._id).then(res => response.json(res));
});

module.exports = router