'use strict';
var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter{ //esto biene de la clase EventEmmiter
    constructor(){
        super(); // el super es para hacer referenca a la superclase, quitando las lineas de inher
        this.greeting = 'hello world!';
    }

    greet (data){
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);
    }
}

var greeter1= new Greetr();

greeter1.greet("Manco");
