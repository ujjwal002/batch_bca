
const fun = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am asynchrounouse in nature")
    },1000)
})

// // fun.then(value=>console.log(value))

fun.then(function fun(value){
    console.log("your name");
    console.log("my name is ujjwal");
    console.log(value)
})


// console.log("your name")

// setTimeout(() => {
//     console.log(" i am asynchrounouse in nature")
// }, 1000)


// console.log("my name is ujjwal")


// what is callstack , event queue , and event loop


// what i have told you is 

// it will directly go in to call stack and run its

// it the piece of code like setTimeout , setInterval , reading file and writing file

// will go in to event queue

// event loop will keep checking that call stack is get emplty or not

// if it got empty then whoever will in quue first , will in stack first ,it will execute first