const http = require("http")

const server = http.createServer((request,response) => {

    //console.log(request.url)

    if (request.url == "/") {
        response.write("Bienvenido a el servidor")
        return response.end()
    }

    if (request.url == "/about") {
        response.write("Estas en about")
        return response.end()
    }
    response.write(`<h1>NOT FOUND</h1>
                    <p>Esta pagina no se encontro</p>
                    <a href="http://localhost:3000/">Volver ala pagina principal</a>
                    `)
    response.end()
})

server.listen(3000)

console.log("Servidor escuchando en el puerto 3000")

/**
 * http://localhost:3000/
 */