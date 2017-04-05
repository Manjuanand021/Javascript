//Saving this context in local variable
var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        var that = this;
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        nestedFunction = function () {
            console.log("Name:", that.name, "Color:", that.color, "Age:", that.age);
        }
        return nestedFunction;
    }
}
var innerFunc = cat.printInfo();
cat.printInfo();
innerFunc();