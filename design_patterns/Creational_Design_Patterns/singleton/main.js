var taskRepo = require('./task');

var task1 = taskRepo.getInstance();
var task2 = taskRepo.getInstance();
var task3 = taskRepo.getInstance();
var task4 = taskRepo.getInstance();
var task5 = taskRepo.getInstance();
var task6 = taskRepo.getInstance();
var task7 = taskRepo.getInstance();
console.log(`Tak object created ${taskRepo.created()} times`);