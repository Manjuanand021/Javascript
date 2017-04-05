//Execution context is created for every method call
//Execution Cotaxt runs in two phases - Creation phase and Execution phase
//Each execution context gets - Variable object(parameters - argument object), Scope chain(current scope and all parent scope) 
//and this object -  in most of the cases it refers to current object
//every execution context gets this keyword 
//this is assigned value when we invoke function or method
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();
//     console.log('I am first function');

//     function second() {
//         console.log(b);
//         var c = 'Hey!';
//         third();
//         console.log('I am second');
//     }
// }


// function third() {
//     var d = 'John';
//     console.log('I am third method');
// }


//this keyword
//Regular function call - this gets assigned to window object
//In regular function call this always points to Window object
sayHello()

function sayHello() {
    console.log(this);
}
//Method
var emp = {
    name: 'Manjuanand',
    age: 29,
    sayHello: function () {
        console.log(this);

        (function () {
            console.log(this);
        })()
    }
}
emp.sayHello();