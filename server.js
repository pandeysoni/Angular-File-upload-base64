var express = require('express'),
    Routes = require('./server/routes'),
    Db = require('./server/config/db'),
    config = require('./server/config/config'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express();


app.use(express.static(path.join(__dirname, 'client/')));
app.use(bodyParser.urlencoded({ limit: '52428800', extended: true }));
app.use(bodyParser.json({limit: '52428800'}));


/** load routes*/
app.get('/', function(req, res) {
    res.sendFile('./client/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

require('./server/routes')(app);

var port = config.server.port;

app.listen(port);

console.log('App started on port ' + port);

