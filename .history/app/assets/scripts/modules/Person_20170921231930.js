fclass Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hello, my name is " + this.name + " and faverite color is " + this.favoriteColor + ".");
    }
}

module.exports = Person;