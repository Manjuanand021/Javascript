// function repoFactory() {
//     this.get = function (type) {
//         if (type === 'task') {
//             if (!this.taskRepo) {
//                 this.taskRepo = require('./taskRepository')();
//                 //config settings
//             } else
//                 console.log('retriecing task from cache');
//             return this.taskRepo;
//         } else if (type === 'user') {
//             var userRepo = require('./userRepository')();
//             return userRepo;
//         } else if (type === 'project') {
//             var projectRepo = require('./projectRepository')();
//             return projectRepo;
//         }
//     }
// }
function repoFactory() {
    var repos = this;
    var repoList = [{
            name: 'task',
            source: './taskRepository'
        }, {
            name: 'user',
            source: './userRepository'
        },
        {
            name: 'project',
            source: './projectRepository'
        }
    ];
    repoList.forEach(function (rp) {
        repos[rp.name] = require(rp.source)();
    })
}
module.exports = new repoFactory;