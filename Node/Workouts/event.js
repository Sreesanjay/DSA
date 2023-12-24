const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('hai',(data)=>{
    console.log(data);
})

eventEmitter.emit('hai',"hellow")