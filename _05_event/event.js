// below lines are not working indepentely
var events = require('events')
//check spellings
// var eventEmitter = new events.EventEmitter()

var myEventHandler = function (){
    console.log("I heard a scream")
}

// eventEmitter.on('scream', myEventHandler)

// eventEmitter.emit('scream')

// why the below lines are not working
events.EventEmitter().on('scream', myEventHandler)
events.EventEmitter().emit('scream')