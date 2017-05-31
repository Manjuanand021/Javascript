//Prototype design pattern
function TeslaModels(wheels, color, make) {
    this.numOfWheels = wheels || 4;
    this.color = color || 'white';
    this.make = make || 'model s'
}

// TeslaModels.prototype.go = function () {
//     //Rorate wheels
// }
// TeslaModels.prototype.stop = function () {
//     //Apply break pads
// }
//Or
TeslaModels.prototype = {
    go: function () {
        //Rorate wheels
    },
    stop: function () {
        //Apply break pads
    }
}

