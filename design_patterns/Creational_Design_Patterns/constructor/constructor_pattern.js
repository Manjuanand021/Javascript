// var Task = require('./task');
var Task = require('./task_es6');
var myTask1 = new Task('Create demo for constructor pattern');
var myTask2 = new Task('Create demo for modules pattern');
var myTask3 = new Task('Create demo for singleton pattern');
var myTask4 = new Task('Create demo for prototype pattern');
myTask1.complete();
myTask2.save();
myTask3.save();
myTask4.save();