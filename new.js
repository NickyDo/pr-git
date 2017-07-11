var http = require('http');
var dt = require('./myfirstmodel');

http.createServer(function(red, res) {
	res.writeHead(200, {'Content-type':'text/plain'});
	res.write('Hello world!' +
	dt.myDateTime() );
	res.end();
}).listen(8080);