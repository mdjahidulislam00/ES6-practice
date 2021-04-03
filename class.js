class customer {
    constructor (customerId, customerName){
        this.id = customerId;
        this.name = customerName;
        this.type = 'regular';
    }
}

const customer1 = new customer('3154', 'Md. Jahidul Islam');
console.log(customer1);

class student{
    constructor(studentName, studentRoll) {
        this.name = studentName;
        this.Roll = studentRoll;
        this.school = 'Natore Boys School';
        
    }
}

const student1 = new student('shakib-al-hassan', '01');
console.log(student1);