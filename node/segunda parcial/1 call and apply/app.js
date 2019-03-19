/*var obj = {
    name: 'John Doe',
    greet: function (){
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: 'Jane Doe' }); */


var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    EventEmitter.call(this);
    this.greeting = 'Hello World!';
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}
