// what is synchronous and asynchronous code in JavaScript?
// Synchronous code is executed in sequence, blocking the execution of subsequent code until the current operation is complete.
// Asynchronous code allows the program to continue executing while waiting for an operation to complete,



console.log("Starting");


setTimeout(function(){
    console.log("I am a callback function that runs after 2 seconds");
},1000);

console.log("Ending");


















