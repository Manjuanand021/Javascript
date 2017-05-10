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
// function Person(name, nationality = 'India') {
//     this.name = name;
//     this.nationality = nationality;
// }

// var manju = new Person('Manjuanand');
// console.log(manju);


//!!!
//Maps
//!!!
// let questions = new Map();
// questions.set('q1', 'What is your name?')
// questions.set(1, 'Manju');
// questions.set(true, 'Toladinni');
// console.log(questions);
// //get an item
// console.log(questions.get(true));
// //remove an item from Map
// questions.delete(1);
// //HAs method
// if (questions.has(true))
//     questions.delete(true);
// console.log(questions);
//CLear everything from map
// questions.clear();
// console.log(questions);

//iterate over maps
// questions.forEach((val, key) => {
//     console.log(val);
//     console.log(key);
// });
//for of for maps
// for (let [key, value] of questions.entries()) {
//     console.log(key);
//     console.log(value);
// }
//Why maps are better than objects
//-- we can use anything as key
//-- maps are iterable
//--size of map sing size property
//--easily add and remove items, its easy to build hash maps

//!!!
///Classes
//Class definitions are not hoisted
//We can only add methods to class not properties
//!!!
//ES5
// function Person(name, age, job, designation) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.designation = designation;
// }

// Person.prototype.displayInfo = function () {
//     console.log(`I am ${this.name} of age ${this.age}. and my job is ${this.job} and designation ${this.designation}`);
// }

// var manju = new Person('Manjuanand', 29, 'Software Engineer', 'Technical Lead');
// manju.displayInfo();

// //ES6
// class PersonClass {    
//     constructor(name, age, job, designation) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//         this.designation = designation;
//     }
//     displayInfo() {
//         console.log(`I am ${this.name} of age ${this.age}. and my job is ${this.job} and designation ${this.designation}`);
//     }

//     static greeting() {
//         console.log('Hellooss');
//     }
// }
// var manju6 = new PersonClass('Manjuanand', 29, 'Software Engineer', 'Technical Lead');
// // manju6.displayInfo();
// console.log(manju6);
// PersonClass.greeting();



//!!!
//Inheritance
//!!!

//ES5
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayHello = function () {
//     console.log(this.name);
// }

// function Employee(name, age, id, designation) {
//     Person.call(this, name, age);
//     this.designation = designation;
//     this.id = id;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.something = function () {
//     console.log('loll');
// }
// const emp1 = new Employee('Manjuanand', 29, 130708, 'TL');
// console.log(emp1);
// emp1.sayHello();


//ES6
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(this.name);
//     }
// }

// class Employee extends Person {
//     constructor(name, age, id, designation) {
//         super(name, age);
//         this.designation = designation;
//         this.id = id;
//     }
//     something() {
//         console.log('loll');
//     }
// }

// const emp1 = new Employee('Manjuanand', 29, 130708, 'TL');
// console.log(emp1);
// emp1.sayHello();
// emp1.something();

//!!!
//Exercise
//!!!
class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, nnumOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.nnumOfTrees = nnumOfTrees;
    }
    treeDensity() {
        const density = this.nnumOfTrees / this.area;
        console.log(`${this.name} has density ${density} per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear} is a ${classification.get(this.size)}`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1892, 2.9, 3541),
    new Park('Oak Park', 1953, 0.5, 949)
];

const allStreets = [
    new Street('New Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2007, 2.1),
    new Street('Sunset Boulevard', 1999, 4.5, 5)
]

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(parks) {
    console.log(`------------Park Report-------------`);
    //Density
    parks.forEach((cur) => {
        cur.treeDensity();
    })
    //Average age
    const ages = parks.map((cur) => {
        return (new Date).getFullYear() - cur.buildYear;
    });

    const [totalAge, averageAge] = calc(ages);
    console.log(`Average age- ${averageAge}, total age - ${totalAge}`);

    //Which parks have more thna 1000 trees
    // for (const cur of parks) {
    //     if (cur.nnumOfTrees > 1000)
    //         console.log(`${cur.name} has more than 1000 trees`);
    // }

    // const index = parks.map(el => el.nnumOfTrees).findIndex(el => el >= 1000);
    // console.log(index);
    console.log(parks[parks.findIndex(el => el.nnumOfTrees >= 1000)].name);
}

function reportStreets(s) {

}

reportParks(allParks);
reportStreets(allStreets);
