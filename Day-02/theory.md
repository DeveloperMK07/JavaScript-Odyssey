📘 Day 2 – Data Types, Variables & Objects in JavaScript
1️⃣ JavaScript Data Types

JavaScript has two main categories of data types:

🔹 A. Primitive Data Types

Primitive types store single values and are immutable.

1. Number

Used for integers and decimal values.

let age = 21;
let price = 99.99;
2. String

Used to store text.

let name = "Mayur";
let greeting = 'Hello World';
3. Boolean

Represents logical values: true or false.

let isLoggedIn = true;
let hasPermission = false;
4. Undefined

A variable declared but not assigned a value.

let x;
console.log(x); // undefined
5. Null

Represents intentional absence of value.

let data = null;
6. BigInt

Used for very large integers.

let bigNumber = 12345678901234567890n;
7. Symbol

Used to create unique identifiers.

let id = Symbol("uniqueId");
🔹 B. Non-Primitive (Reference) Data Type
Object

Objects store collections of data in key-value pairs.

let person = {
    name: "Mayur",
    age: 21,
    isStudent: true
};
2️⃣ Variables in JavaScript

Variables are used to store data.

JavaScript provides three ways to declare variables:

1. var (Old way – Avoid using)

Function scoped

Can be redeclared

Can be updated

var city = "Mumbai";
2. let (Recommended for changeable values)

Block scoped

Cannot be redeclared in same scope

Can be updated

let score = 10;
score = 20;
3. const (Recommended for fixed values)

Block scoped

Cannot be redeclared

Cannot be reassigned

const pi = 3.14;

⚠️ Important:
If const holds an object, its properties can still be modified.

const user = {
    name: "Mayur"
};

user.name = "Rahul"; // Allowed
3️⃣ Creating Objects in JavaScript

Objects are used to group related data together.

🔹 Method 1: Object Literal (Most Common)
let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024
};
🔹 Accessing Object Properties
console.log(car.brand);      // Dot notation
console.log(car["model"]);   // Bracket notation
🔹 Adding or Modifying Properties
car.color = "Red";     // Add
car.year = 2025;       // Modify
🔹 Deleting Properties
delete car.year;
🧠 Key Takeaways from Day 2

JavaScript has 7 primitive data types

Objects are reference types

Prefer let and const over var

Use const by default unless reassignment is needed

Objects store data in key-value format

Properties can be accessed using dot or bracket notation