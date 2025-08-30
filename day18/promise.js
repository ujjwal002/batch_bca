// var value = 10

// const fun = new Promise((resolve, reject) => {
//     if (value > 10) {
//         resolve("value is greate that ten ")
//         // return "value is greate thatn 10"
//     }
//     else {
//         reject("value is not greater than 10")
//         // return "value is not greater thatn 10"
//     }
// }
// )

// fun.then(function gun(value) {
//     console.log("promise is fullfilled", value)
// })
// .catch(err => {
//     console.log("oops promise got rejected", err)
// })
















var number = 21;


const fun = new Promise((resolve,reject)=>{
    if(number==20){
        resolve("my value is equal to 20")
    }
    else{
        reject("my value is not greater or less that 20")
    }
})

fun.then((value)=>{
    console.log(value)
})
.catch((value)=>{
    console.log(value)
})


// setTime out ans setinter val , will go in event queye

// promises will go in micro task quere


// microtask queue has more priorti over macro / event queue