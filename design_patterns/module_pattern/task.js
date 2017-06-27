var Repo = require('./taskRepository');

function Task(title) {
    this.title = title;
    this.completed = false;
}
Task.prototype = {
    save: function () {
        console.log(`Task saved - ${this.title}`);
    },
    complete: function () {
        this.completed = true;
        Repo.save(this);
        console.log(`Completing task - ${this.title}`);
    }
}
module.exports = Task;