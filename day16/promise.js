// a promise is a object that represent a value that you will get later, it has three state

// pending

// fulfullid
// rejected


// you owe some money to somebody , you have promised him that you will return his money on specific date

// till then that specific date is not come , it is in pending state

// if that data came there will two things happend, 

// if you return your money , then your promise is fulfilled

// if on that data, you will day that guys , sorry i will return it after one weeks
// your promise go in to pending

// if on that you will just i dont have money , i can return it , so your promises is rejected



const fun = new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("done")
    },1000)
})

// // fun.then(value=>console.log(value))

fun.then(function fun(value){
    console.log(value)
})

// console.log(fun)

// var value = 10

// const fun = new Promise((resolve,reject)=>{
    // if(value>10){
    //     resolve("value is greate that ten ")
    //     // return "value is greate thatn 10"
    // }
    // else{
    //     reject("value is not greater than 10")
    //     // return "value is not greater thatn 10"
    // }

//     const resonse  = axios.get("/getUser") //asyn code 

//     Response.then((reposen)=>{
//         if(reposen){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// })

// fun.then(function gun(value){
//     console.log("promise is fullfilled",value)
// })
// .catch(err=>{
//     console.log("oops promise got rejected",err)
// })

// var value = 10

// function fun(value,callback){

//     callback(value)

// }

// function gun(value){
//     function bin(value,callback){
//         function tin(value, callback){
//             console.log("hello i am here")
//         }

//         tin(value,bin)
//     }

//     bin(value,gun)
// }

// fun(value,gun)


