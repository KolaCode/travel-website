function Person(fullName, favColor) {
    this.name = funllName;
    this.faveriteColor = favColor;
    this.greet = function
        console.log("Hello, my name is " + this.name + " and faverite color is " + this.faveriteColor + ".");
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();