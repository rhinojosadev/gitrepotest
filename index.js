var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('./templates/welcome.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
  console.log(`Server is running`);
}).listen(8000);