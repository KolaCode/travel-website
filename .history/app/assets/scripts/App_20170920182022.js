function Person() {
    this.greet = function() {
        console.log("Hello there!");
    }
}

var john = new Person();
john.greet();

var jane = new Person();
jane.greet();