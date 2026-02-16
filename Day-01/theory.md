🔹 1. Difference Between Java and JavaScript

Even though the names sound similar, Java and JavaScript are completely different languages.

🟢 Java

Object-Oriented Programming language

Compiled language

Runs on JVM (Java Virtual Machine)

Used for backend development, Android apps, enterprise systems

Strongly typed language

Example:

int number = 10;

🟡 JavaScript

Scripting language

Interpreted language (runs in browser)

Used for web development (frontend mainly)

Dynamically typed

Can also run on server using Node.js

Example:

let number = 10;

🔥 Key Differences
Feature	Java	JavaScript
Type System	Statically Typed	Dynamically Typed
Execution	JVM	Browser / Node.js
Use Case	Backend, Android	Web (Frontend + Backend)
Compilation	Compiled	Interpreted
🔹 2. What is getElementById()?

getElementById() is a DOM method used to select an HTML element using its id attribute.

📌 Syntax:
document.getElementById("idName");


It returns the element that has the specified id.

🧠 Example

HTML:

<p id="demo">Hello</p>
<button onclick="changeText()">Click Me</button>


JavaScript:

function changeText() {
    document.getElementById("demo").innerHTML = "Hi, this is JavaScript!";
}

🔥 What Happens Internally?

Browser loads HTML.

Creates DOM (Document Object Model).

JavaScript accesses DOM using document.

getElementById() searches for element with that id.

We modify its content using innerHTML.

🔎 Important Notes

ID must be unique.

Always use correct casing: getElementById (capital E, B, I).

innerHTML is also case-sensitive.

🎯 What I Learned Today

Java and JavaScript are different.

JavaScript interacts with HTML through DOM.

getElementById() helps select elements.

We can modify content dynamically using innerHTML.