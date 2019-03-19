var util = require ('util');

function Person(){
    this.firstname = 'John';
    this.lastname = 'Due';
}

Person.prototype.greet = function(){
    console.log('helo ' + this.firstname + ' ' + this.lastname);
}
function Policeman() { 
    this.badgetnumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();