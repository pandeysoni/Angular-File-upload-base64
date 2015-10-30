var Image = require('./image.server.controller');

module.exports = function(app){
    app.post('/image', Image.create);
    app.get('/image', Image.get);
}