var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var auther_controller = require('../controllers/autherController');
var genre_controller = require('../controllers/genreController');

/// BOOK ROUTES ///
router.get('/',book_controller.index);
// display book list
router.get('/book', book_controller.book_list);

// Display Bookdetails with specific id.
router.get('/book/:id',book_controller.book_id);

// // add items on booklist
router.post('/book', book_controller.book_post);

// update bookitems
router.put('/book/:id', book_controller.book_put);

// Delete Bookitems.
router.delete('/book/:id', book_controller.book_delete);


/// AUTHOR ROUTES ///

// display author list
router.get('/auther', auther_controller.auther_list);

// Display author details with specific id.
router.get('/auther/:id', auther_controller.auther_id);

// add items on author details
router.post('/auther', auther_controller.auther_post);

// update author details
router.put('/auther/:id', auther_controller.auther_put);


/// GENRE ROUTES ///

// display genre list
router.get('/genre', genre_controller.genre_list);

// Display genre  with specific id.
router.get('/genre/:id', genre_controller.genre_id);

// add items
router.post('/genre', genre_controller.genre_post);

// edit genre details.
router.put('/genre/:id', genre_controller.genre_put);


module.exports = router;
