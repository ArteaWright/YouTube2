const express = require('express')
const router = express.Router()
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    queryTimeout: 6000,
    connectTimeout: 60000,
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ', err);
        return;
    }
});

// GET home page 

router.get('/', function (req, res, next) {
    connection.query('Select * From FTC.videos', function (error, results, fields) {
        if (error) throw error;

        res.json({ videos: results || [] })
    });

});

module.exports = router;