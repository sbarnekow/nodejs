var my_data = 'callback([{"title": 1,"value": 3920},{"title": 2, "value": 2223},{"title": 3, "value": 1760},{"title": 4, "value": 1108},{"title": 5, "value": 1875}])';
var http = require('http');
var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "application/javascript"});
  response.write(my_data);
  response.end();
});

server.listen(80);
// open up on devmachine.com:80
// this is great for sending JSON
