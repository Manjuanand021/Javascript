var TaskRepo = (function () {
    var task;
    var created = 0;

    function createTask() {
        task = new Object('Task');
        task.name = 'default name';
        task.description = 'default description.';
        created++;
        return task;
    }
    return {
        getInstance: function () {
            if (!task) {
                console.log('New instance');
                task = createTask();
            } else
                console.log('Old one');
            return task;
        },
        created: function () {
            return created;
        }
    }
})();
module.exports = TaskRepo;