

var name = "John";

let name2 = "Doe";

const name3 = "Smith";

console.log(name4)  


// function greet() {
//     var name4 = "Jane"; // This 'name' is local to the function
//     console.log("Hello, " + name2); // Outputs: Hello, Jane
// }

// greet();

// if(true) {
//     var name4 = "Jane"; // This 'name' is block-scoped
//     console.log("Hello, " + name4); // Outputs: Hello, Jane
// }


// Whenever we intiliaze the variable with let it always get the scope of enclosing block 

// function greet() {
//     let name4 = "Jane"; // This 'name' is local to the function
//     console.log("Hello, " + name4); // Outputs: Hello, Jane
// }

console.log(name4)



if(true) {
    var name4 = "Jane"; // This 'name' is block-scoped
    console.log("Hello, " + name4); // Outputs: Hello, Jane
}


var name = "John";

var name = "Doe"; // This is allowed, 'name' is redeclared


// let name5= "val"; // This is allowed, 'name2' is declared

// let name5= "val2"; // This will throw an error, 'name2' is already declared

 name5 = "val2"; // This is allowed, 'name2' is declared

 console.log(name5)




const name6 = "Smith"; // This is allowed, 'name3' is declared

name6= "Doe"; // This will throw an error, 'name3' is a constant and cannot be reassigned

console.log(name6); // Outputs: Smith


console.log(name7); // Outputs: Doe


var name7 = "Doe"; // This is allowed, 'name2' is declared