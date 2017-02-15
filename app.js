var http = require('http');
var fs = require('fs');


let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//Create a pipe
myReadStream.pipe(myWriteStream);

//SAU

// myReadStream.on('data', chunk => {
//     console.log('New chunck recived!!!');
//     console.log(chunk);
//     myWriteStream.write(chunk);
// });


const server = http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    console.log(req.url);

    let myReadStream2 = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

    myReadStream2.pipe(res);

});

server.listen(1000, '127.0.0.1', () => console.log('App running ar http://localhost:1000'));

