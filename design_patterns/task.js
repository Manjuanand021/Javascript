var task = Object.create(Object.prototype);
Object.defineProperty(task, 'title', {
    value: 'My Task',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(task, 'description', {
    value: 'My Descripton',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' and ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});
var urgetnTask = Object.create(task);
urgetnTask.title = 'I am urgent task';
console.log(urgetnTask.toString());