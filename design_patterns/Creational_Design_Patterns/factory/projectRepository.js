var repo = function () {
    console.log('newing up project repo.');
    return {
        get: function (id) {
            console.log(`Getting project id - ${id}`);
            return {
                name: 'new project from db'
            }
        },
        save: function (project) {
            console.log(`Saving project ${project.name}`);
        }
    }
}
module.exports = repo;