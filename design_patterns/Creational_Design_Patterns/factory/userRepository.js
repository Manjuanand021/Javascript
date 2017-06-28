var repo = function () {
    console.log('newing up user repo.');
    return {
        get: function (id) {
            console.log(`Getting user id - ${id}`);
            return {
                name: 'new user from db'
            }
        },
        save: function (user) {
            console.log(`Savingusertask ${user.name}`);
        }
    }
}
module.exports = repo;