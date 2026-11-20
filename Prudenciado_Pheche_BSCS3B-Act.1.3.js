let studentName = "Pheche";
let studentAge = 20;
let studentCourse = "BS Computer Science";
let studentYear = "3rd Year";
let studentGrade = 88;
let studentCity = "Calbayog";
let studentStatus = "Regular";
let teacherName = "Ms. Santos";
let subjectName = "JavaScript";
let passingGrade = 75;
let semester = "First Semester";


const schoolName = "Northwest Samar State University";
const schoolCode = "NWSSU";
const courseCode = "BSCS";
const section = "CS3B";
const room = "Computer Laboratory 1";
const units = 3;
const maxGrade = 100;
const minGrade = 0;
const academicYear = "2026-2027";
const department = "College of Computing and Information Sciences";
const programHead = "Dr. Reyes";


const students = ["Pheche", "Ella", "Van", "Jean", "Theo"];

const grades = [88, 92, 74, 85, 79];

const subjects = [
    "JavaScript",
    "Database",
    "Networking",
    "Web Development"
];


// Arrow Function #1
const greetStudent = (name) => {
    return `Hello, ${name}!`;
};

// Arrow Function #2
const calculateAverage = (a, b) => {
    return (a + b) / 2;
};

// Arrow Function #3
const isPassed = (grade) => {
    return grade >= passingGrade;
};

// Arrow Function #4
const addStudent = (name) => {
    return `Student ${name} has been added.`;
};

// Arrow Function #5
const showSubject = (subject) => {
    return `Subject: ${subject}`;
};



//  TEMPLATE LITERALS 


console.log(`Student Name: ${studentName}`);

console.log(`Age: ${studentAge}`);

console.log(`Course: ${studentCourse}`);

console.log(`Year Level: ${studentYear}`);

console.log(`Grade: ${studentGrade}`);

console.log(`City: ${studentCity}`);

console.log(`Status: ${studentStatus}`);

console.log(`Teacher: ${teacherName}`);

console.log(`Subject: ${subjectName}`);

console.log(`School: ${schoolName}`);

console.log(`Academic Year: ${academicYear}`);

console.log(`Department: ${department}`);



// DESTRUCTURED ARRAYS 

// Destructured Array #1
const [firstStudent, secondStudent] = students;

// Destructured Array #2
const [firstGrade, secondGrade, thirdGrade] = grades;

// Destructured Array #3
const [firstSubject, secondSubject, thirdSubject] = subjects;

console.log(`First student: ${firstStudent}`);
console.log(`Second student: ${secondStudent}`);

console.log(`First grade: ${firstGrade}`);
console.log(`Second grade: ${secondGrade}`);

console.log(`First subject: ${firstSubject}`);
console.log(`Second subject: ${secondSubject}`);



//  DESTRUCTURED OBJECT LITERALS 


const student = {
    name: "Pheche",
    age: 20,
    course: "BSCS"
};

const teacher = {
    name: "Ms. Santos",
    subject: "JavaScript",
    experience: 5
};

const school = {
    name: "NWSSU",
    location: "Calbayog",
    type: "University"
};


// Object Destructuring #1
const { name: studentFullName, age: studentFullAge } = student;

// Object Destructuring #2
const { name: teacherFullName, subject: teacherSubject } = teacher;

// Object Destructuring #3
const { name: universityName, location: universityLocation } = school;

console.log(`Student: ${studentFullName}, Age: ${studentFullAge}`);

console.log(`Teacher: ${teacherFullName}, Subject: ${teacherSubject}`);

console.log(`University: ${universityName}, Location: ${universityLocation}`);



// ARRAYS USING SPREAD OPERATOR 


const moreStudents = ["Maria", "Blaze"];

const allStudents = [...students, ...moreStudents];

console.log(`All students: ${allStudents}`);

const moreSubjects = ["Artificial Intelligence", "Cybersecurity"];

const allSubjects = [...subjects, ...moreSubjects];

console.log(`All subjects: ${allSubjects}`);



// OBJECT LITERALS USING SPREAD OPERATOR 


const studentInformation = {
    name: "Pheche",
    age: 20,
    course: "BSCS"
};

const additionalInformation = {
    city: "Calbayog",
    status: "Regular"
};

// Object Spread #1
const completeStudent = {
    ...studentInformation,
    ...additionalInformation
};

console.log(
    `Complete Student: ${completeStudent.name}, ${completeStudent.course}`
);


// Object Spread #2
const academicInformation = {
    school: "NWSSU",
    year: "3rd Year"
};

const contactInformation = {
    email: "student@example.com",
    phone: "09123456789"
};

const completeInformation = {
    ...academicInformation,
    ...contactInformation
};

console.log(
    `School: ${completeInformation.school}, Email: ${completeInformation.email}`
);


// ARRAYS USING .map() 


// MAP ARRAY #1
const doubledGrades = grades.map((grade) => {
    return grade * 2;
});

console.log(`Doubled grades: ${doubledGrades}`);


// MAP ARRAY #2
const studentGreetings = students.map((student) => {
    return `Hello, ${student}!`;
});

console.log(`Greetings: ${studentGreetings}`);



//  ARRAYS USING .filter


// FILTER ARRAY #1
const passingStudents = grades.filter((grade) => {
    return grade >= passingGrade;
});

console.log(`Passing grades: ${passingStudents}`);


// FILTER ARRAY #2
const highGrades = grades.filter((grade) => {
    return grade >= 85;
});

console.log(`High grades: ${highGrades}`);



// OBJECT LITERALS USING OPTIONAL CHAINING 


const studentProfile = {
    name: "Pheche",
    course: {
        name: "BS Computer Science",
        section: "CS3B"
    }
};

const teacherProfile = {
    name: "Ms. Santos",
    department: {
        name: "CCIS"
    }
};


// Optional Chaining Object #1
const studentSection = studentProfile.course?.section;

console.log(`Student Section: ${studentSection}`);


// Optional Chaining Object #2
const teacherDepartment = teacherProfile.department?.name;

console.log(`Teacher Department: ${teacherDepartment}`);



// ARROW FUNCTIONS


console.log(greetStudent(studentName));

console.log(`Average: ${calculateAverage(85, 90)}`);

console.log(`Passed: ${isPassed(studentGrade)}`);

console.log(addStudent("Carla"));

console.log(showSubject(subjectName));