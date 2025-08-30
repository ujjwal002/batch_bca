// var response;

// setTimeout(function fun(){
//     response = "i am asuync in nature"
// },0)


// console.log(response)



// so code is which is natively kn0wn to js is synchrnous is nature

// like all the varibles, function if else , loop , 

// but the functionality which is provided by nodes js , its execution work different

// the code which is natively know to js , will go in to call stack first, 

// the code which is async in nature, will go in event queue

// there is event loop which keep checking , is call stack got empty or not 

// if it got emty

// then one by one , event loop transer the function in to call stack it got executed



// var response;

// setTimeout(function fun(){
//     response = "you are hitting api here"
// },0)


// console.log(response)


// for doing that we have three way , 

// one is callback , another is using promosis , and another is async await


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
