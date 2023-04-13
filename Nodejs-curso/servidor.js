// creandro servidor
const server = require("http")
const puerto = 5000

server.createServer(function(req,res) {
    res.write("Probando mi servidor")
    res.end()
    
}).listen(puerto)
console.log("Escuchando el puerto 5000")


/**
 * http://localhost:5000/
 */
