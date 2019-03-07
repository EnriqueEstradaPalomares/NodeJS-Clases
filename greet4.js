function Greetr(){
    this.greeting = 'Hello World g4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greetr;