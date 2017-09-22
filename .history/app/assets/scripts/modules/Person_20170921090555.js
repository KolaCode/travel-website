function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and faverite color is " + this.favoriteColor + ".");
    }
}

console.log("Hello from Person.js");

exports.exampleProperty = "Supper magical example value";
exports.exampleFunction = function() {
    alert("This is an example.");
}