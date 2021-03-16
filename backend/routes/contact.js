const express = require('express')
const router = express.Router()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ftc'
});

// POST contact information into the database 
router.post('/', function (req, res, next) {
    console.log(req.body)
    // const { q: searchTerm = '' } = req.query
    connection.query('INSERT INTO contact SET ?', req.body, function (error, results, fields) {
        if (error) throw error;

        res.json({ sucesss: true })
    });

});

module.exports = router;