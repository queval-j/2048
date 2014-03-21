var express = require('express'),
	app = express();

app.use(express.static(__dirname + "/../"));

app.all(/^\/server.*/, function (req, res) {
	res.send(404, 'What are you going to do ?');
});

console.log('Server is now listening on port 8080');

app.listen(8080);