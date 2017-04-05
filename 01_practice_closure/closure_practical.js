function Employee(name, id) {
    this.name = name;
    this.age = id;
    Employee.count++;
}
Employee.prototype.count = 0;


var emp = new Employee('Manjuanand', 130787);
var emp1 = new Employee('Toladinni', 629711);

console.log(emp1.count);