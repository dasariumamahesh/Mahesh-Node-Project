const app = require('./app')
const http = require('http');
const port = 80;
const server = http.createServer(app)
server.listen(port)

server.on('listening', function onListening(){
    console.log("Listening on port:"+port)
})