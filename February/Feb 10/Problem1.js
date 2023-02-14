class Employee {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}

class Manager extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}
class HR extends Employee {
  constructor(name, role, empId) {
    super(name);
    this.role = role;
    this.empId = empId;
  }
}
let obj1 = new Admin('Ajay', 'admin', '01');
let obj2 = new Admin('Krishna', 'admin', '02');
let obj3 = new Admin('Ravi', 'admin', '03');
let obj4 = new Manager('Ranjith', 'Manager', '04');
let obj5 = new Manager('Gokul', 'Manager', '05');
let obj6 = new Manager('Bharath', 'Manager', '06');
let obj7 = new HR('Ashwin', 'HR', '07');
let obj8 = new HR('Vignesh', 'HR', '08');
let obj9 = new HR('Arjun', 'HR', '09');

let total = [
  'obj1',
  'obj2',
  'obj3',
  'obj4',
  'obj5',
  'obj6',
  'obj7',
  'obj8',
  'obj9',
];

let count = 0;
for (let i = 0; i < total.length; i++) {
  count++;
}

console.log(`${count} Objects have been created`);

let emp1 = new Employee('Praveen');
let emp2 = new Employee('Shanmugam');
let emp3 = new Employee('Arun');

let totalEmp = ['emp1', 'emp2', 'emp3'];

let count1 = 0;
for (let i = 0; i < totalEmp.length; i++) {
  count1++;
}

console.log(`${count1} Objects have been created`);