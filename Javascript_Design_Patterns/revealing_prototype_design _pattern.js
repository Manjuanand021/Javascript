//Revealing prototype design pattern
//This is similar to prototype design pattern and provides encapsualation with public, private members 
//since it returns an object literal
//Prototype design pattern
// Since we are returning an object, we will prefix the prototype object with a
function.
function TeslaModels(wheels, color, make) {
    this.numOfWheels = wheels || 4;
    this.color = color || 'white';
    this.make = make || 'model s'
}
TeslaModels.prototype = function () {
    var go = function () {
        //Rorate wheels
    };
    var stop = function () {
        //Apply brake pads
    };
    return {
        rotateWheels: go,
        applyBrake: stop
    }
}