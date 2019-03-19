//es otra forma, pero no es recomendable en JavaScript
'use strict';

class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('helo ' + this.firstname + ' ' + this.lastname)
    }
}

var john = new Person('John','Due');
john.greet();

var jane = new Person('Jane','Due');
jane.greet();

