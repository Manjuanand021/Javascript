//Module Design Pattern
// For those that are familiar with object - oriented languages, modules are JavaScript "classes".
// One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes.
// The module pattern allows for public and private(plus the lesser - know protected and privileged) access levels.
//IIFE - Immediately Invoked Function Expressions are used to create modules or on demand scope
var app = (function () {
    function printWelcomeMsg() {
        return 'Hellooos, Welcome Mr.Manjuanand ';
    }
    return {
        callPrintMethod: function () {
            var msg = printWelcomeMsg();
            console.log(msg);
        }
    }
})();
app.callPrintMethod();