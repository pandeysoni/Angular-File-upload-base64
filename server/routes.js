// API Server Endpoints
module.exports = function(app){
  require("./image/image.server.routes")(app);
}
