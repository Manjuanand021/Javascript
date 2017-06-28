function Employee(name, salary) {
    this.name = function (val) {
        return name;
    };
    this.salary = function (val) {
        return salary;
    };;
}

Employee.prototype.salaryChanging = function (calback) {

};
Employee.prototype.salaryChanged = function (calback) {

};

const manju = new Employee('Manjuanand Toladinni', 629711, 50000);
console.log(`name - ${manju.name()}`);
console.log(`salary - ${manju.salary()}`);
manju.salaryChanging(function (b, salary) {
    if (salary < 50000) {
        console.log('Error. Salary is less than average.');
        return false;
    }
    return true;
});
manju.salaryChanged(function (salary) {
    console.log(`Salary changed successfully. New salary - ${salary}`);
});