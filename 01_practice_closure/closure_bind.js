//Use bind to save the context
//Bind is nifty because it allows you to change what this references 
//and then store a reference to the altered function in a variable to be used at a later time
var cat = {
    name: "Gus",
    color: "gray",
    age: 15,

    printInfo: function () {
        console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        nestedFunction = function () {
            console.log("Name:", this.name, "Color:", this.color, "Age:", this.age);
        }
        return nestedFunction;
    }
}
var innerFunc = cat.printInfo();
cat.printInfo();
var refToAlteredFunc = innerFunc.bind(cat);
// console.log(refToAlteredFunc);