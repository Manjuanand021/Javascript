(function () {
    var app = angular.module('taskManager');
    app.factory('Task', function () {
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
                console.log(`Completing task - ${this.title}`);
            }
        }
        return Task;
    });
})();