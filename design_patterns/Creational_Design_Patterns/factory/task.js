var Repo = require('./taskRepository')();

function Task(title) {
    this.title = title;
    this.completed = false;
    this.user = {};
    this.project = {};
}
Task.prototype = {
    save: function () {
        console.log(`Task saved - ${this.title}, user - ${this.user.name} and project - ${this.project.name}`);
        Repo.save(this);
    },
    complete: function () {
        this.completed = true;
        console.log(`Completing task - ${this.title}, user - ${this.user.name} and project - ${this.project.name}`);
    }
}
module.exports = Task;