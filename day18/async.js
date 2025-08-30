const fun = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am asynchrounouse in nature")
    },10000)
})

// // fun.then(value=>console.log(value))

fun.then(function fun(value){
    console.log(value) //3rd   //3rd

    console.log("your name"); //2nd // ist
        console.log(value) //3rd   //3rd
    console.log(value) //3rd   //3rd

    console.log("my name is ujjwal"); // 1st //2nd
    console.log(value) //3rd   //3rd

    // it seem like it sync in nature
})

// console.log("your name")


// // you are hittin some api here

// const response = hititng api 


// console.log("my name is ujjwal",response)