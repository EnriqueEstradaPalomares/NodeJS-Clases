function Greetr(){
    this.greeting = 'Hello World g3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greetr();