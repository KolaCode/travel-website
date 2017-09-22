function Person() {
    this.greet = function() {
        console.log("Hello there!");
    }
}

var john = new Person();
john.greet();