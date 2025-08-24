// what is synchronous and asynchronous code in JavaScript?
// Synchronous code is executed in sequence, blocking the execution of subsequent code until the current operation is complete.
// Asynchronous code allows the program to continue executing while waiting for an operation to complete,



// console.log("Starting");


// setTimeout(function(){
//     console.log("I am a callback function that runs after 2 seconds");
// },1000);

// console.log("Ending");


// if javascript is synchronous , then how this code is asynchronous

// how js handel asynchronous code

// javascript is synchronouse for natively code which is know in js


// var , let const , functinon, if else , operatior, while , for loop

// console.log("Starting a long task");

// for(let i=0;i<1000000000;i++){
//     // console.log(i);
//     console.log("Processing..." + i);
// }

// console.log("Ending a long task");



// node is runtime enviornemnt , who node ryan dhal, 

// if you node js you can run javascript outside of the browser

// but node js give some power to javascript it give a code like settomeout , setinterval , hitting some api , 
// reading file , writing file


// what is stack and queue



// every piece of code which is written in js is called a call stack


console.log("Starting a long task"); //1st 


function longTask(){
    console.log("Long task started");
}

setTimeout(function fun(){
    console.log("I am a callback function that runs after 1 seconds");  // 4th
},2000);

setTimeout(function gun(){
    console.log("I am a callback function that runs after 2 seconds"); //2nd  
},1000);

setTimeout(function run(){
    console.log("I am a callback function that runs after 3 seconds") // 3rd 
},1000)


setTimeout(function sun(){
    console.log("I am a callback function that runs after 4 seconds") // 5th
},2000)




function anotherTask(){
    console.log("Another task started");
}


function yetAnotherTask(){
    console.log("Yet another task started");
}


// longTask()
// anotherTask()

// yetAnotherTask()
// so what happen if the code is which is natively known to js , it will directly go in to call stack

// but if the code is not natively known to js , it will got to event queue

// event loop 

// event loop check the call stack is empty or not , with all the exeuction of natively known code is done or not



// what is happening 

// the above two setTimeout function , is not directly go in to event queue

// the timer complete first , then which one setTimeout time complete first it go in to event queue






















