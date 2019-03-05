/*function greet(){
    console.log('hi');
}
greet();

//function are first class
function logGreeting(fn){
    fn();
}
logGreeting(greet)

//function expresion
var greetMe=function(){
    console.log('hi compa');
}
greetMe();


logGreeting(greetMe);

//ise a function expression on the fly
logGreeting(function(){
    console.log('ola compa!')
}) */

/*var greet = require('./greet.js');
greet();*/

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, '+this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person['firstname']);
