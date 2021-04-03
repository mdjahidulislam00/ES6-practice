class School {
    constructor(){
        this.schoolName = "Vikarunnacha Noon High School";
    }
}

class Student extends School{
    constructor (studentName, studentRoll){
        super();
        this.name = studentName;
        this.roll = studentRoll;
    }
    //calling Function
    nameAndRoll(){
        return this.name + ' ' + this.roll;
    }
}

const sabbir = new Student ('Sabbir', '01');
console.log(sabbir);
console.log(sabbir.nameAndRoll());