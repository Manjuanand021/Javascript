(function () {
    var app = angular.module('taskManager', []);
    app.controller('taskController', function (Task) {
        var ctrl = this;
        this.title = 'Welcometo Design Pattern Turorial.'
        var task = new Task('I have created TaskManager Angular app.');
        task.save();
        task.complete();
        ctrl.task = task;
    });
})();