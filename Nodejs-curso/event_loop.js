// console.log("first")
// setTimeOut(()=>{
//     console.log("second")
// },3000)
// console.log("third")

const http = require("http")
const puerto = 3000 
const server = http.createServer( function(req,res) {
    if(req.url === "/"){
        res.write("Esta en el inicio")
        return res.end()
    }
    if (req.url === "/about") {
        
        // BLOCKING CODE 
        // for (let i = 0; i < 100000; i++) {
        //     console.log(Math.random() * i)
        // }

        return res.end("Estas en About")
    }
    res.end("Not Found")
})

server.listen(puerto)

console.log("Servidor escuchando en el puerto "+puerto)