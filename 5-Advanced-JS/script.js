//primitive types
// Numbers
// String
// Boolean
// undefined
// null
//Accept above primitive values, everything else is objects in javascript
//Object is blueprint from which instances are created - each object will get its own set of instance variables
//Prototype property of an object is where you put methjods and properties that you want available for other objects to inherit
//Constructor prototype property is not prototype of constructor but its prototype of all the objects created from it

//fucntion Constructor
// var manju = {
//     name: 'Manjuanand',
//     dob: '8th May',
//     age: 29
// }

//create blueprint and create manju from it
// function Person(name, dob, age) {
//     this.name = name;
//     this.dob = dob;
//     this.age = age;
// }
// //prototype
// Person.prototype.displayAge = function () {
//     console.log(`My age ${this.age}`);
// }

// Person.prototype.middleName = 'Ananad';

// //Create an instance from Person
// //new creates new empty object
// //and then function constructor is called which creates an execution context and assign this to new object
// //all the varibales are set as properties of new object
// var manju = new Person('Manjuanand', '8th May', 29);
// manju.displayAge()
// console.log(manju);
// var manjuanand = new Person('Toladinni', '9th May', 29);
// manju.displayAge();
// console.log(manjuanand);


//Object create
//Builds an object that inherits directly from the first argumanet we pass it to object.create method
//Function costructor - newly created object inherits from constructor's prototype object
//Object.create allows us to implement really complex inheritance structure in easy way because it obejct blueprint itself is prototype
//Function constructor are most common way to implement inheritance
// var Person = {
//     name: 'Manjuanand',
//     age: 29,
//     sayHello: function () {
//         console.log(this.name);
//     }
// }

// var manju = Object.create(Person);
// var manjuanand = Object.create(Person, {
//     middleName: {
//         value: 'Anand'
//     },
//     lastNAme: {
//         value: 'Toladinni'
//     }
// });


//primitive vs objects
//primitives - number, string, boolean, undefined and null
//primitive values are passed by value and objects are passed by reference in function

//functions
// function sayHello() {
//     console.log('Helloooos.');
// }

///!!!
//Functions accepting fnctions as argument
//!!!

// var yrs = [1997, 1998, 1999];
// //Generic function whic loops through an input array and calls callback function for each element of an array and returns new array
// function arrayCalc(arr, fn) {
//     var tempArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         tempArr.push(fn(arr[i]));
//     }
//     return tempArr;
// }

// function calcAge(val) {
//     return 2016 - val;
// }

// function fullAge(ele) {
//     return ele >= 18;
// }

// function maxHeartRate(age) {
//     return Math.round(206.9 - (0.67 * age));
// }

// var ages = arrayCalc(yrs, calcAge);
// console.log(ages);
// ages = arrayCalc(ages, fullAge);
// console.log(ages);
// console.log(arrayCalc(ages, maxHeartRate));

///!!!
//Functions returning functions
//!!!
// function interviewQuestions(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(`Mr. ${name}, what is UX design?`);
//         }
//     } else if (job === 'c# programmer') {
//         return function (name) {
//             console.log(`Mr. ${name}, what is c#?`);
//         }
//     } else {
//         return function () {
//             console.log('no questions for you.');
//         }
//     }
// }


// var designerQuestion = interviewQuestions('designer');
// designerQuestion('Manjuanand');
// designerQuestion('Toladinni');
// var programmerQuestion = interviewQuestions('c# programmer');
// programmerQuestion('Hema');


//!!!
//Immediately invoked function expresson - IIFE
//!!!
//Create IIFE only when the purpose is to create new scope which is hidden from outside scope
//With this we obtain data privacy
// function game() {
//     var randomScore = Math.random * 10;
//     console.log(randomScore >= 5);
// }
// game();

// (function () {
//     var randomScore = Math.random * 10;
//     console.log(randomScore >= 5);
// })();

//!!!
//Closures
//!!!
// function retirement(retirementAge) {
//     return function (yearOfBirth) {
//         var age = 2017 - yearOfBirth;
//         console.log(`Retirement age - ${retirementAge- age}`);
//     }
// }

// var retirementUSAge = retirement(66);
// retirementUSAge(1987);

// var retirementUSAge = retirement(66);
// retirementUSAge(1987);

//Another example
// function interviewQuestions(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(`Mr ${name}, what sUX design?`);
//         } else if (job === 'teacher') {
//             console.log(`Ms ${name}, which subject do you teach?`);
//         } else {
//             console.log(`Mr ${name}, No questions for you`);
//         }
//     }
// }

// var interviewQuestionsTeacher = interviewQuestions('teacher');
// interviewQuestionsTeacher('Hema');
// interviewQuestionsTeacher('Sudha');

//Bind, Call and Apply
// var manju = {
//     name: 'Manjuanand',
//     role: 'TL',
//     salary: '50,000',
//     displaySalary: function () {
//         console.log(`Mr. ${this.name} role is ${this.role} and salary - ${this.salary}`);
//     }
// }
// var toladinni = {
//     name: 'Toladinni',
//     role: 'TL',
//     salary: '45,000',
// }
// manju.displaySalary();
// //One way of borrwowing displayDalary from manju object and display toladinni details
// toladinni.getSalary = manju.displaySalary;
// toladinni.getSalary();

// //other way is to use call, bind or Apply 
// manju.displaySalary.call(toladinni);






//Quiz game
//IIFE creates new scope - IF you want to share your code code with others then use IIFE to hide the scope from outside world
// (function () {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.propmtQuestion = function () {
//         console.log(this.question);
//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }

//     }

//     Question.prototype.checkAnswer = function (answer, callback) {
//         var score;
//         if (answer === this.correct) {
//             console.log('Correct answer.');
//             score = callback(true);
//         } else {
//             console.log('Wrong answer. Please try again.');
//             score = callback(false);
//         }
//         this.displayScore(score);
//     }

//     Question.prototype.displayScore = function (score) {
//         console.log(`Your current score is ${score}`);
//         console.log('-------------------------------------');
//     }

//     var q1 = new Question('is your name Manjuanand?', ['yes', 'no'], 0);
//     var q2 = new Question('is your surname Toladinni?', ['yes', 'no'], 0);
//     var q3 = new Question('is your middle name Anand?', ['yes', 'no'], 0);
//     var questions = [q1, q2, q3];

//     function score() {
//         var sc = 0;
//         return function (correct) {
//             if (correct)
//                 sc++;
//             return sc;
//         }
//     }

//     var keepScore = score();

//     function nextQustion() {
//         var randomQuestion = Math.floor(Math.random() * questions.length);
//         questions[randomQuestion].propmtQuestion();

//         var answer = prompt(questions[randomQuestion].question);
//         if (answer !== 'exit') {
//             questions[randomQuestion].checkAnswer(parseInt(answer), keepScore);
//             nextQustion();
//         }
//     }
//     nextQustion();
// })();

//Closures- container which keep everything related to tat context instead of having global variables and varibale mutation blah blah

//!!!
//Quiz game repeat
//!!!
(function () {
    var questionsList, q1, q2, q3, q4, keepScore, score;

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers || [];
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(`${i} : ${this.answers[i]}`);
        }
    }

    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (this.correct === ans) {
            console.log(`Correct answer.`);
            sc = callback(true);
        } else {
            console.log('Wrong answer.');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log(`Your current score ${score}`);
        console.log('---------------------------');
    }

    q1 = new Question('Is JavaScript cool programming language?', ['yes', 'no'], 0);
    q2 = new Question('Is Functional Programmin cool?', ['yes', 'no'], 0);
    q3 = new Question('Does hoisting in JavaScript makes things complicate?', ['no', 'yes'], 1);
    q4 = new Question('Use IIFE if only your purpose is to hide the scope from outside?', ['yes', 'no'], 0);

    questionsList = [q1, q2, q3, q4];

    //Closure to create completely new cotext and keep score related stuff saperatley without polluting global cotext and object mutation
    score = function () {
        var sc = 0;
        return function (correctAns) {
            if (correctAns)
                sc++;
            return sc;
        }
    }

    keepScore = score();

    function nextQustion() {
        var random = Math.floor(Math.random() * questionsList.length);
        var randomQuestion = questionsList[random];
        randomQuestion.displayQuestion();

        var answer = prompt(randomQuestion.question);
        if (answer !== 'exit') {
            randomQuestion.checkAnswer(parseInt(answer), keepScore);
            nextQustion();
        }
    }
    nextQustion();
})();