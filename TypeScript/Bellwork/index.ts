// An enum in TypeScript is a way to define a set of named constants, allowing you to assign names to numeric values, making your code more readable and maintainable

// enum Weather {
//     Sunny, 
//     Rainy, 
//     Cloudy,
// }

// An interface in TypeScript is a structure that defines the shape of an object specifying the properties and their types that an object must have

// interface Car {
//     make: string;
//     model: string;
//     year: number;
// }

// A function in TypeScript is a block of code designed to perform a specific task, taking inputsand return an output

// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// ---------------------------------------------------------

enum UserRole {
    Admin,
    Editor,
    Viewer,
}

const currentRole: UserRole = UserRole.Editor;
console.log(currentRole);

interface Student {
    name: string;
    gradeLevel: number;
    isEnrolled: boolean;
}

const student: Student = {
    name: "Alan Sanchez",
    gradeLevel: 12,
    isEnrolled: true,
};

console.log(student);

function calculateTotal(price: number, taxRate: number): number {
    return price + (price * taxRate);
}

console.log(calculateTotal(100, 0.08)); 