var express = require('express');
var router = express.Router();

let models = require('../lib/models');
console.log(models)

// Create question - POST - /api/v1/questions
// Create answer - POST - /api/v1/answers
// Fetch categories - GET - /api/v1/categories
// Fetch questions - GET - /api/v1/questions
// Fetch answers - GET - /api/v1/answers


// Fetch categories - GET - /api/v1/categories
router.get('/categories', async function(req, res, next) {
    // write some code here to fetch the categories

    res.json({success: true});
});


// Fetch questions - GET - /api/v1/questions
router.get('/questions', async function(req, res, next) {
    // write some code here to fetch the questions

    res.json({success: true});
});

// Fetch answers - GET - /api/v1/answers
router.get('/answers', async function(req, res, next) {
    // write some code here to fetch the answers

    res.json({success: true});
});



// Create question - POST - /api/v1/questions
router.post('/questions', async function(req, res, next) {
    // write some code here to create a question
    res.json({success: true});
});


// Create answer - POST - /api/v1/answers
router.post('/answers', async function(req, res, next) {
    // write some code here to create an answer
    res.json({success: true});
});





/* GET home page. */
// api/v1/test
router.get('/test', function(req, res, next) {
    res.json({success: true});
});

module.exports = router;
