//let and const

//ES5
// var name5 = 'Manjuanand Toladinni';
// var age5 = 29;
// name5 = 'Toladinni Manjuanand'
// console.log(name5);

// function displayName5() {
//     if (true) {
//         var yo5 = 'Yo man';
//     }
//     console.log(yo5);
// }
// displayName5();

// //ES6
// const name6 = 'Manjuanand Toladinni';
// let age6 = 29;
// console.log(name6);

// function displayName6() {
//     if (true) {
//         let yo6 = 'Yo man';
//     }
//     console.log(yo6);
// }
// displayName6();


//!!!
//Blocks and IIFEs
//!!!
//ES5

// (function () {
//     var a, b = 5;
// })();
// console.log(a + b);

// //Es6
// {
//     const a = 1;
//     let b = 2;
// } console.log(a + b);

///!!!
//Strings
//!!!
// const fName = 'Manju';
// const mName = 'Anand';
// const lName = 'Toladinni';
// const age = 29;

// function displayName() {
//     console.log(`Hi Mr. ${fName} ${mName} ${lName} 
//     and your age is ${age}`);
// }
// displayName();

// console.log(fName.startsWith('M'));
// console.log(fName.startsWith('A'));
// console.log(`${fName} `
// .repeat(5));

//!!!
//Arrow functions
//Arrow functions share lexical this from its surroundings
//!!!
//ES5
// const years = [1990, 1991, 1992, 1993, 1994, 1995];
// const ages = years.map(function (current, index, arr) {
//     return 2017 - current;
// });
// console.log(ages);

// //ES6
// const ages6 = years.map((current, index) => `Age - ${2017 - current}`)
// console.log(ages6);

//ES5
// var box5 = {
//     color: 'green',
//     positon: 1,
//     clickMe: function () {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function () {
//             console.log('This is green box - color - ' + self.color + ', position - ' + self.positon);
//         })
//     }
// }

// box5.clickMe();

// var box6 = {
//     color: 'green',
//     positon: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             console.log('This is green box - color - ' + this.color + ', position - ' + this.positon);
//         })
//     }
// }

// box6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// //ES5
// Person.prototype.displayName5 = function () {
//     return function () {
//         console.log('my name - ' + this.name);
//     }.bind(this);
// }

// var per = new Person('Manjuanand');
// var func = per.displayName5();
// func();

// Person.prototype.displayName6 = function () {
//     return () => {
//         console.log(this.name);
//     }
// }

// var per = new Person('Toladinni');
// var func = per.displayName6();
// func();

//!!!
//Destructuring
//Destructure data structure
//!!!
//ES5
// var manju = ['Manjuanand', 29];
// var name = manju[0];
// var age = manju[1];

// //ES6
// const [name6, age6] = ['Manjuanand', 29];
// console.log(name6);
// console.log(age6);

// const manju6 = {
//     fName: 'Manjuanand',
//     lName: 'Toladinni'
// }

// const {
//     fName: firstName,
//     lName: lastName
// } = manju6;
// console.log(firstName);
// console.log(lastName);

// //Return multiple values from function - use destructuring
// function findAgeName() {
//     return ['Manjuanand', 29];
// }

// const [userName, userAge] = findAgeName();
// console.log(userName);
// console.log(userAge);

//!!!
//Arrays in ES6
//!!!
// let boxes = document.querySelectorAll('.box');
// //ES5
// //COnvert nodelist ot an array
// boxes = Array.prototype.slice.call(boxes);
// boxes.forEach(function (current) {
//     current.style.backgroundColor = 'green';
// });

// //ES6
// //Transforms nodelist to an array
// const boxes6 = Array.from(boxes);
// boxes6.forEach((current) => {
//     current.style.backgroundColor = 'pink';
// })

// //for of loop ES6 - break ,continue
// for (const box of boxes6) {
//     if (box.className.includes('blue')) {
//         continue;
//         // break;
//     } else
//         box.textContent = 'I am changed';
// }

// const nums = [1, 2, 3, 4, 5];
// const val = nums.find((cur) => cur > 3);
// console.log(val);

//!!!
//Spread operatoos - expand elemt of an arrya in places like arguments and parameters
//!!!

// ES5
// function add(a, b, c) {
//     return a + b + c;
// }
// var sum5 = add(1, 2, 3)
// console.log(sum5);
// var arr = [4, 5, 6];
// var abc = add.apply(null, arr);
// console.log(abc);

// //ES6
// const sum3 = add(...arr);
// console.log(sum3);

// //joining array
// const arr1 = ['Manju', 'Anand', 'Toladinni'];
// const arr2 = ['Hema', 'F', 'Snganaavar'];
// const family = [...arr1, ...arr2]
// console.log(family);

//!!!
//REST parameters - allow us to pass arbitrary number of parameters to function adn allow function to use them
//!!!
//ES5
// function blah() {
//     console.log(Array.prototype.slice.call(arguments));
// }
// blah(1, 2, 3)
// function blah(...nums) {
//     // console.log(Array.prototype.slice.call(arguments));
//     console.log(nums);
// }
// blah(1, 2, 3)


//!!!
//Default parameters - one or more functions parameter to have default parameters
///!!!
function Person(name, nationality = 'India') {
    this.name = name;
    this.nationality = nationality;
}

var manju = new Person('Manjuanand');
console.log(manju);