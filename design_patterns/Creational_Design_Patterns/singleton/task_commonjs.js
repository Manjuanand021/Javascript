var TaskRepo = (function () {
    console.log('newing up taskrepo');

    function save() {
        console.log('something saved to db.');
    }
    return {
        save: save
    }
})();
module.exports = TaskRepo;