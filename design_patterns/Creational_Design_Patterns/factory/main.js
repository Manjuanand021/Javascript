var Task = require('./task');
// var TaskRepo = require('./taskRepository');
// var UserRepo = require('./userRepository');
// var ProjectRepo = require('./projectRepository');
var repoFactory = require('./repoFactory');

// var task1 = new Task(TaskRepo.get(1));
// var task1 = new Task(repoFactory.get('task').get(1));
// var user = repoFactory.get('user').get(1);
// var project = repoFactory.get('project').get(1);
var task1 = new Task(repoFactory.task.get(1));
var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;
console.log(task1);

task1.save();
task1.complete();