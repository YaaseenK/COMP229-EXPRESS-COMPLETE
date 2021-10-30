/* COMP229Assignment1 */
/* Student Name: Yaaseen Khan */
/* Student Number: 301164475 */
/* OCT/9/2021 */
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET ABOUT US page. */
router.get('/about', indexController.displayAboutPage);

/* GET PRODUCTS page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET SERVICES page. */
router.get('/services', indexController.displayServicesPage);


/* GET CONTACT US page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for the Login page - Read/Find Operation */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page - Read/Find Operation */
router.post('/login', indexController.processLoginPage);

/* GET Route for the Add page - Register Operation */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page -  Operation */
router.post('/register', indexController.proccessRegisterPage);

/* GET to preform UserLogout - LOGOUT Operation */
router.get('/logout', indexController.preformLogout);

module.exports = router;