const http = require('http');
const fs = require('fs');

// http.createServer((req, res) =>{
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200 , {'Content-Type': 'text/html'});
//     readStream.pipe(res);
// }).listen(3000);

// http.createServer((req, res) =>{
//     const readStream = fs.createReadStream('./static/image.png');
//     res.writeHead(200 , {'Content-Type': 'image/png'});
//     readStream.pipe(res);
// }).listen(3000);

// http.createServer((req, res) =>{
//     const readStream = fs.createReadStream('./static/testExample.json');
//     res.writeHead(200 , {'Content-Type': 'application/json'});
//     readStream.pipe(res);
// }).listen(3000);


http.createServer((req, res) =>{
    if(req.url === '/image'){
        const readStream = fs.createReadStream('./static/image.png');
        res.writeHead(200 , {'Content-Type': 'image/png'});
        readStream.pipe(res);
    }else if(req.url === '/json'){
        const readStream = fs.createReadStream('./static/testExample.json');
        res.writeHead(200 , {'Content-Type': 'application/json'});
        readStream.pipe(res);
    }else if(req.url === '/html'){
        const readStream = fs.createReadStream('./static/index.html');
        res.writeHead(200 , {'Content-Type': 'text/html'});
        readStream.pipe(res);
    }else{
        res.write('pata hai na bhai');
        res.end();
    }
}).listen(3000);