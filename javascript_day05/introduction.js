// introuduction to javascript

// it is multi-purpose language ( web application , mobile application ) and it is multi - paradigm languguage( we can 

// write code in functional  and object oriented)

// node js is basically a run time environment for javascript

// ryan dhal // is the creator of node js

// node which provide a environment to run javascript code outside the browser

console.log("hello world");


// in javasctipt everything in object apart from therir primitive value


// null  undefined, Boolean, string, Number, Symbol


// let , var ,const 


// what variable , varible is bucket to store a value
// 
// let, var, const



// var is global scope
// varibal has global scoping in the first flow it look for var and function 
// console.log(name)
// var name ; 

// var name= "john1";

// test();
// function test() {   
//     console.log(name);
//     var name = "john"; // i know a name whichh has function  scoping
//     console.log(name);
// }

// in the first flow it just remember you var and function and give a scoping to that either it will global or
// function scoping


// in the second flow it will intialize the variable and function and run as like language do 





// in first flow

// line 33  it will it will ignore the console.log()

// line 34  it will a scoping for this varible  , it will a global scope

// line 36 intilize the varible name with john1


// line 37 it will ignore this console.log (name)


// line 39 var name it will give scoping function scoping




 


console.log(name) // undefined 
var name;
function  fun(){ //it will remember the function and give a scoping to that function
    console.log(name); //undefined
    var name = "john2";  //function scoping
    console.log(name); //john2
}

fun();
//




