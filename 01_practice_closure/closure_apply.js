//Use apply to save the context
//call() and apply() immediately run the function, they return the result of calling that function.
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
var refToApply = innerFunc.apply(cat);
console.log(refToApply);