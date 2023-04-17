//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage
const person = new Person("John", 25);
console.log(person.name); // "John"
person.age = 30;

const student = new Student("Jane", 20);
console.log(student.name); // "Jane"
student.study(); // "Jane is studying"

const teacher = new Teacher("Bob", 35);
console.log(teacher.name); // "Bob"
teacher.teach(); // "Bob is teaching"


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;