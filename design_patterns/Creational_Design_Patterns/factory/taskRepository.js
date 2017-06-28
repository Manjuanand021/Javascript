var repo = function () {
    console.log('newing up task repo.');
    return {
        get: function (id) {
            console.log(`Getting task id - ${id}`);
            return 'new task from db'
        },
        save: function (task) {
            console.log(`Saving task ${task.title} in db`);
        }
    }
}
module.exports = repo;