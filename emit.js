var util = require('util');

var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter;

emitter.on('error', function(error){
    console.error(error.message);
});


emitter.emit('error', new Error('our error is bad and we feel bad'));


// emitter.emit('start');
// emitter.emit('count', 1);
// emitter.emit('count', 2);

// function Counter(){
//     var self = this;

//     EventEmitter.call(this);
//     var count = 0;

//     this.start = function(){
//         this.emit('start');
//         setInterval(function(){
//             self.emit('count', count);
//             ++count;
//         }, 100);
//     }
// }

// util.inherits(Counter, EventEmitter);

// var counter = new Counter();
// counter.once('start', function(){
//     console.log('start event');
// });

// counter.once('count', function (count) {
//   console.log('count = ' + count);  
// });

// counter.start();