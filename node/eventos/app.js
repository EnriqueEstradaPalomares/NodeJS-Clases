//object propierties and methods
/*
var obj = {
    greet: 'hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

*/
//functions and arrays
/*
var arr = [];
arr.push(function(){
    console.log('hello World!');
});

arr.push(function(){
    console.log('hello World!!');
});

arr.push(function(){
    console.log('hello World!!!');
});

arr.forEach(function(item){
    item();
}); */

//var Emitter = require('./emitter');  el cambio para el archive emitter

var Emitter = require('events'); //el cambio para Node.js
var eventConfig = require('./config').events;
var emtr=new Emitter();

/*(emtr.on('greet', function(){                   para el archivo, este esta bien
    console.log('somewehere, someone said hello');
}); 

emtr.on('greet', function(){
    console.log('a greeting ocurred');
});*/

emtr.on(eventConfig.GREET, function(){  //para que entre la magic string, config.js tiene la magic string, nos dice donde esta el error de codigo, pero no es bu
    console.log('somewehere, someone said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('a greeting ocurred');
});

console.log('holis');
emtr.emit('greet');