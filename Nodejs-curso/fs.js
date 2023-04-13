const fs = require("fs")

// const first = fs.readFileSync("./data/first.txt","utf-8")
// const second = fs.readFileSync("./data/second.txt")

// console.log(first)
// console.log(second.toString())

// fs.writeFileSync("./data/tercero.txt","Este es un tercer archivo")

// const title = "Este achivo de a añadido"
// fs.writeFileSync("./data/four.txt",title,{
//     flag : "a"
// })

//asyncrono

fs.readFile("./data/first.txt","utf-8",(error,data) => {
    if(error){
        console.log(error)
    }
    console.log(data)
    
    fs.readFile("./data/second.txt","utf-8",(error,data) => {
        if(error){
            console.log(error)
        }
        console.log(data)

        fs.writeFile("./data/newFile.txt","Nuevo archivo desde fs",(err,data)=>{
            console.log(err)
            console.log(data)

            fs.writeFile("./data/newFile2.txt","Nuevo archivo2 desde fs",(err,data)=>{
                console.log(err)
                console.log(data)
            })
        })
    })
})

