const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on('x',(data,secondData) =>{
    console.log("received")
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('x',"hello world",[1,2,3])
// customEmitter.emit('x',"scott")
// customEmitter.emit('x',19)
// customEmitter.emit('x',[1,2,3])
// customEmitter.emit('x',{name : "Diego"})