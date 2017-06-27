var repo = (function () {
    return {
        get: function (id) {
            console.log(`Getting task id - ${id}`);
            return 'new task from db'
        },
        save: function (task) {
            console.log(`Saving task ${task.title}`);
        }
    }
})();
module.exports = repo;