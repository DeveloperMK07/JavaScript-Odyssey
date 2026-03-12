// JavaScript Variable naming::

//1. VAR

var age=21;
age = 24;

console.log(age)

//2. LET

let name="mayuresh";
// let name="Kadale";


//ERROR::Uncaught SyntaxError: Identifier 'name' has already been declared (at script.js:13:5)

// BUT ::
name=kadale;
console.log(name);
//Does not give the error.

//3. CONST

// Block-start;
{

    const cgpa=8.21;
}
// Block-end;;
const cgpa=9.1;

console.log(cgpa);

// Allowed for a particular block