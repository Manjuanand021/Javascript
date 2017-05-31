//Signleton Design Pattern
// The Singleton restricts clients from creating multiple objects, after the first object created, 
// it will return instances of itself.
var printer = (function () {
    var printerInstance;

    function create(name) {
        function print() {
            //print mechanics
            console.log(`I am ${name} and printng now...`);
        }

        function turnOn() {
            //warm up and turn on
        }
        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn
        }
    }

    return {
        getPrinterInstance: function (name) {
            if (!printerInstance) {
                printerInstance = create(name);
            }
            return printerInstance;
        }
    }
})();
var sdbPrinter = printer.getPrinterInstance('sdb printer');
var sezPrinter = printer.getPrinterInstance('sez printer');