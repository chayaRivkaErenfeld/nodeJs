const http =require('http')
const app = require('./app')
const port = 3000
//hellow rina rina 
const server = http.createServer(app)
server.listen(port)

