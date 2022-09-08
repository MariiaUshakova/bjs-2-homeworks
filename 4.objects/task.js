function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...rest) {
  let marks = [...rest];
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(rest);
  }
}

/* Student.prototype.getAverage = function (average) {
  this.marks.reduce((a, b) => (a + b)) / this.marks.length;
} */

Student.prototype.getAverage = function () {
  return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}

student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
student1.addMarks(5, 4, 4)
console.log(student1);
console.log(student1.getAverage());

student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades');
console.log(student2);