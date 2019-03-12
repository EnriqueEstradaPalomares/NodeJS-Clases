/*var firstname = 'Jane';

(function (lastname) {
    var fisrtname='John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

console.log(firstname);*/


var greet = require('./greet1'); //return a function
greet();


var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();