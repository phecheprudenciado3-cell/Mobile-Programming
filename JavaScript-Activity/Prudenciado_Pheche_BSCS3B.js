let schoolName = "Northwest Samar State University";
let schoolYear = "2026-2027";
let passingGrade = 75;



let students = ["Pheche", "Ella", "Van", "Jean"];
let grades = [90, 85, 72, 88];
let subjects = ["JavaScript", "Database", "Networking"];



const school = {
    name: schoolName,
    location: "Samar"
};

const course = {
    name: "Computer Science",
    code: "CS"
};



class Person {

    // CONSTRUCTOR #1
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // METHOD #1
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}



class Student extends Person {

    // CONSTRUCTOR #2
    constructor(name, age, studentId, grade) {
        super(name, age);
        this.studentId = studentId;

        // ENCAPSULATION #1
        let _grade = grade;

        this.getGrade = function() {
            return _grade;
        };

        this.setGrade = function(newGrade) {
            if (newGrade >= 0 && newGrade <= 100) {
                _grade = newGrade;
            }
        };
    }

    
    study() {
        return `${this.name} is studying ${subjects[0]}.`;
    }

    
    checkResult() {
        if (this.getGrade() >= passingGrade) {
            return `${this.name} passed!`;
        } else {
            return `${this.name} failed.`;
        }
    }
}



class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}



class Course {

    constructor(courseName, units) {
        this.courseName = courseName;
        this.units = units;
    }

    
    showCourse() {
        return `${this.courseName} has ${this.units} units.`;
    }
}



class SchoolSystem {

    constructor(schoolName) {
        this.schoolName = schoolName;
    }

    
    displayInformation() {
        this.showSchool();
        this.showStudents();
    }

    showSchool() {
        console.log("School: " + this.schoolName);
    }

    showStudents() {
        console.log("Number of Students: " + students.length);
    }
}




let student1 = new Student(
    "Pheche",
    20,
    "2026-001",
    90
);

let student2 = new Student(
    "Ella",
    21,
    "2026-002",
    72
);

let teacher1 = new Teacher(
    "Mr. Santos",
    35,
    "JavaScript"
);

let course1 = new Course(
    "Advanced Computer Programming",
    3
);



class BankAccount {

    // Private field
    #balance;

    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }
}




// Conditional #1
if (student1.getGrade() >= passingGrade) {
    console.log("Student 1 passed.");
}

// Conditional #2
if (student2.getGrade() >= passingGrade) {
    console.log("Student 2 passed.");
} else {
    console.log("Student 2 failed.");
}

// Conditional #3
if (grades.length >= 3) {
    console.log("There are enough grades.");
}





console.log("\nStudent List:");

for (let i = 0; i < students.length; i++) {
    console.log((i + 1) + ". " + students[i]);
}



console.log("\nSubjects:");

for (let subject of subjects) {
    console.log(subject);
}



console.log("\nGrades:");

let index = 0;

while (index < grades.length) {
    console.log(grades[index]);
    index++;
}




console.log("\nPolymorphism:");

let people = [
    student1,
    teacher1
];

for (let person of people) {

    if (person instanceof Student) {
        console.log(person.study());
    } 
    else if (person instanceof Teacher) {
        console.log(person.teach());
    }
}




console.log("\nStudent Information:");
console.log(student1.introduce());
console.log(student1.study());
console.log(student1.checkResult());

console.log("\nTeacher Information:");
console.log(teacher1.introduce());
console.log(teacher1.teach());

console.log("\nCourse Information:");
console.log(course1.showCourse());

console.log("\nSchool Information:");

let system = new SchoolSystem(school.name);
system.displayInformation();



let account = new BankAccount("Pheche", 2500);

console.log("\nBank Account:");
console.log("Owner: " + account.owner);
console.log("Balance: " + account.getBalance());