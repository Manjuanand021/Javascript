class Task {
    constructor(title) {
        this.title = title;
        this.completed = false;
    }
    save() {
        console.log(`Task saved - ${this.title}`);
    }

    complete() {
        this.completed = true;
        console.log(`Completing task - ${this.title}`);
    }
}
module.exports = Task;