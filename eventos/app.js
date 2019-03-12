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

var Emitter = require('./emitter');
var emtr=new Emitter();

emtr.on('greet', function(){
    console.log('somewehere, someone said hello');
});

emtr.on('greet', function(){
    console.log('a greeting ocurred');
});

console.log('holis');
emtr.emit('greet');