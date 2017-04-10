function Greeter() {
    this.msg = 'Hello World';
    this.greet = function () {
        console.log(this.msg);
    }
}

module.exports = new Greeter();