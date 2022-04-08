const http = require('http');

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'kristian'
    },
    {
        id: 1,
        name: 'stephanie'
    },
    {
        id: 2,
        name: 'lisseth'
    }
];

const server = http.createServer((req, res) => {
    const items = req.url.split('/');
    if(req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if(req.method === 'GET' && items[1] === 'friends') {
        res.writeHead(200, {
            //'content-type': 'text/plain'
            'content-type': 'application/json',
        });
        if(items.length === 3){
            const friendIndex = +items[2];
            res.end(JSON.stringify(friends[friendIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>hey kristian :)</li>');
        res.write('<li>how are you?</li>');
        res.write('<ul>');
        res.write('<body>');
        res.write('<html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
    //res.end('sever your leg please. it\'s the greatest day');
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});