/***************************************
 * Part 1: Understanding and Creating Objects
 ***************************************/
const student = {
  // Basic properties
  name: 'Alice',
  age: 22,
  enrolled: true,
  courses: ['JavaScript', 'HTML', 'CSS'],
  
  //  display basic student info
  displayInfo() {
    return `${this.name} is ${this.age} years old and enrollment status: ${this.enrolled}`;
  },
  
  // add a new course to the courses array
  addCourse(newCourse) {
    this.courses.push(newCourse);
  },
  
  // calculate and return the total number of courses
  getTotalCourses() {
    return this.courses.length;
  }
};

// console.log to output result
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Basic Student Info:", student.displayInfo());

/***************************************
 * Part 2: Working with JSON
 ***************************************/
// Convert student object into a JSON string
const studentJSON = JSON.stringify(student);
console.log("Student as JSON:", studentJSON);

// Convert JSON string back into a JavaScript object

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Student Object:", parsedStudent);

/***************************************
 * Part 3: Using Destructuring Assignment
 ***************************************/
// Destructure properties from the student object
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

// Create an array of scores
const scores = [85, 92, 78, 90];
console.log("Scores:", scores);

// Destructure the first two scores from the array
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


/***************************************
 * Part 4: The Spread Operator
 ***************************************/
// Clone the student object using the spread operator and add a new property
const studentClone = { ...student, graduationYear: 2025 };
console.log("Cloned Student with Graduation Year:", studentClone);

// Merge two arrays: combine student.courses with a new array of courses
const newCourses = ['Python', 'SQL'];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses Array:", mergedCourses);

/***************************************
 * Part 5: Object Methods (Dynamic Data Handling)
 ***************************************/
// add a new course
student.addCourse('.Net');
console.log("Courses after adding '.Net':", student.courses);

// total number of courses
console.log("Total number of courses:", student.getTotalCourses());

/***************************************
 * Bonus Task: Calculate the Average Score
 ***************************************/
// Use the reduce method to calculate the sum of the scores
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
console.log("Average Score:", averageScore);