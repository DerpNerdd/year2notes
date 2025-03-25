// Part 1: Variables & Scope
function scopeExample() {
    let insideVariable = "I'm inside the function";
    console.log("Inside:", insideVariable);
}
    scopeExample();
    // console.log("Outside:", insideVariable); // This errors because it is not accessable outside the function

    // Hoisting:
    console.log("Var hoisting:", hoistedVar); //var is hoisted 
    var hoistedVar = "I am hoisted";
    // console.log("let hoisting:", hoistedLet); // let and const are not hoisted
    // let hoistedLet = "Not hoisted like var";


// Part 2: Arrays - Manipulation & Higher-Order Functions
    const scores = [10, 20, 30, 40, 51];

    // .map() creates a new array with each value squared:
    const squared = scores.map(x => x * x);
    console.log("Squared:", squared);
    
    // .filter() creates an array with numbers greater than 50:
    const filtered = scores.filter(x => x > 50);
    console.log("Over 50:", filtered);

    // .reduce() sums all numbers in the scores array:
    // .reduce() works by taking an accumulator and the current value for each element in the array
    const sum = scores.reduce((acc, cur) => acc + cur, 0);
    console.log("Sum:", sum);

    /* map, filter, and reduce all run in O(n) time.
    When to use:
    - .map() when you need to transform each element.
    - .filter() when you need to select a subset based on conditions.
    - .reduce() when you need to aggregate values into a single output.
    */

// Part 3: Objects - Nested Structures & Iteration
const student = {
    name: "Alan Sanchez",
    age: 17,
    subjects: ["Math", "English", "History"],
    grades: {
        Math: 90,
        English: 89,
        History: 99
    }
};

// This returns the subject with the highest grade
function getHighestGradeSubject(studentObj) {
    let highestSubject = "";
    let highestGrade = -Infinity;
    for (let subject in studentObj.grades) {
        if (studentObj.grades[subject] > highestGrade) {
            highestGrade = studentObj.grades[subject];
            highestSubject = subject;
}
    }
    return highestSubject;
}

console.log("Subject with highest grade:", getHighestGradeSubject(student));

// Looping through the grades and logging whether each grade is passing
for (let subject in student.grades) {
    const grade = student.grades[subject];
    const status = grade >= 70 ? "Passing" : "Failing";
    console.log(`${subject}: ${status}`);
}

// Part 4: Functions & Closures

// A counter function that returns an inner function to increment and return the counter value
function counter(initialValue = 0, step = 1) {
    let count = initialValue;
    // captures 'count' from the parent scope.
    return function() {
    count += step;
    return count;
    };
}

    const myCounter = counter(10, 5);
    console.log("Counter value:", myCounter()); 
    console.log("Counter value:", myCounter()); 

/*
    Closures allow the inner function to remember the environment in which it was created.
    Even after the counter() function has finished execution, the inner function retains access
    to the variable 'count', preserving its state between calls.
*/

// Part 5: Arrow Functions & This Binding

const greet = name => "Hello, " + name;
console.log(greet("World"));

// two different implementations of sayHello():
const user1 = {
    name: "Alice",
sayHello: function() {
    return "Hello, " + this.name;
}
};

const user2 = {
    name: "Bob",
    // Arrow function: 'this' does not refer to the object, but to the enclosing context, which may not have a 'name' property.
    sayHello: () => "Hello, " + this.name
};

console.log("user1 sayHello:", user1.sayHello());
console.log("user2 sayHello:", user2.sayHello());

/*
    Arrow functions do not have their own 'this'. Instead, they inherit 'this' from their enclosing lexical scope.
    When used as methods within an object, this behavior can lead to unexpected results because 'this'
    might not refer to the object itself.
*/

// Part 6: Destructuring & Spread Operator

const laptop = {
    brand: "MSI",
    model: "Raider GE76",
    specs: { RAM: "64GB", storage: "1TB" }
};

    const { brand, specs: { RAM } } = laptop;
    console.log("Laptop brand:", brand);
    console.log("Laptop RAM:", RAM);

// Creating two arrays and merging them using the spread operator:
    const groupA = ["Student1", "Student2"];
    const groupB = ["Student3", "Student4"];
    const allStudents = [...groupA, ...groupB];
    console.log("All Students:", allStudents);

    function sum(a, b, c) {
    return a + b + c;
}

// Using the spread operator to call sum() with an array [2, 4, 6]:
    const numbers = [2, 4, 6];
    const total = sum(...numbers);
    console.log("Total Sum:", total);

// Part 7: Classes, Constructors & Inheritance

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a generic noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Bailey");
    }

// Overriding speak() for Dog
    speak() {
        return `Woof! My name is ${this.name}`;
    }
}

    const myDog = new Dog("Yailey");
    console.log("Dog speak:", myDog.speak());


//Inheritance allows a class to extend the functionality of another class, promoting code reuse.


// Part 8: Methods, Getters & Setters

class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age; 
    }
    get age() {
        return this._age;
    }

// Setter for age with validation
    set age(newAge) {
        if (newAge < 0) {
            console.error("Age cannot be negative");
    } else {
        this._age = newAge;
    }
}

// increase age by 1
    birthday() {
        this._age++;
    }
}

    const person1 = new Person("Daniel", 18);
    console.log("Initial age:", person1.age); // Getter
    person1.age = 35; // Setter
    console.log("Updated age:", person1.age);
    person1.birthday();
    console.log("After birthday:", person1.age);

// Bonus Challenge: Advanced Concepts

function applyFunctionToArray(arr, func) {
    return arr.map(func);
}
  console.log("Apply function:", applyFunctionToArray([1, 2, 3], x => x * 2));


// A pure function always produces the same output for the same input and has no side effects.

// Example of a pure function:
function add(a, b) {
    return a + b;
}
    console.log("Pure function add:", add(2, 3));

/*
    - Callbacks: Functions passed as arguments to asynchronous operations.
    - Promises: Objects representing the eventual completion or failure of an asynchronous operation, allowing chaining.
    - Async/Await: Syntactic sugar built on promises, allowing asynchronous code to be written in a synchronous style.
  */