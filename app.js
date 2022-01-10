
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require("./routes/location.routes.js")(app);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
