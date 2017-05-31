// Revealing Module Pattern
// A variation of the module pattern is called the Revealing Module Pattern.
// The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal
var app = (function () {
    function returnWelcomeMessage() {
        return 'Hellooos, Mr.Toladinni';
    }
    return {
        sayHello: returnWelcomeMessage
    }
})();
app.sayHello();


//Disadvantages
// Although this looks much cleaner, an obvious disadvantage is unable to reference the private methods.
//This can pose unit testing challenges.
//Similarly, the public behaviors are non- overridable.