// const { Router } = require('express');
// const e = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('../controllers/book')

//   herlper function for guard purposes
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

//connect to our book model
let Book = require('../models/book');

let bookController = require('../controllers/book')

// Get Route for the Book List page - READ OPERATION
router.get('/', bookController.displayBookList );

/* GET Route for the Add page - CREATE Operation */
router.get('/add', requireAuth , bookController.displayAddPage);

/* POST Route for processing the ADD page - CREATE Operation */
// process the add page
router.post('/add', requireAuth ,  bookController.procressAddPage);

/* GET Route for the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth , bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth , bookController.procressEditPage);

/* GET to preform deletion - DELETE Operation */
router.get('/delete/:id', requireAuth , bookController.preformDelete);

module.exports = router;
