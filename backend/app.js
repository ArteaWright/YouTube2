require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var videosRouter = require('./routes/videos');
var contactRouter = require("./routes/contact")
const cors = require('cors');



var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/videos', videosRouter);

app.use("/contact", contactRouter)

app.listen(3001);


module.exports = app;
