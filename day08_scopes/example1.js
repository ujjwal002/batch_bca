
console.log(teacher)
var teacher = 'John Doe';  //global scope

var name4 ;
console.log(name4)

function fun(){ //global scope
    var teacher = 'Jane Smith';  //function scope
    console.log("Hello, " + teacher);  //hello jane smith

    teachingassistant = 'Alice Johnson'; //it will get a scope in phase 2 in excution phase

    console.log(teacher);  //john smith

    console.log(teachingassistant); //alice johnson
}

//still not executed means phasee 2 assigning value of teachingassistant = 'Alice Johnson'; is still not done yet



fun();

console.log(teacher); //john doe
console.log(teachingassistant); //alice johnson







