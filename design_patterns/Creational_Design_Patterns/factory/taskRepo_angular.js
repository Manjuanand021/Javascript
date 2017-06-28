(function () {
    var app = angular.module('taskManager');
    app.factory('TaskRepository', function ($http) {
        function get(id) {
            console.log(`Getting task id - ${id}`);
            return 'new task from db'
        };

        function save(task) {
            console.log(`Saving task ${task.title}`);
        }
        return {
            get: get,
            save: save
        }
    });
})();