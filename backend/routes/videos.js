const express = require('express')
const router = express.Router()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'ftc'
});

// GET home page 
router.get('/search', function (req, res, next) {
    const { q: searchTerm = '' } = req.query
    connection.query('Select * From videos', function (error, results, fields) {
        if (error) throw error;

        res.json({ videos: results.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase())) || [] })
    });

});

module.exports = router;