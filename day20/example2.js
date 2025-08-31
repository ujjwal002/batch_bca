console.log("start");

var promise = new Promise((resolve, reject) => {
    setTimeout(function fun() {
        resolve("in to the promise")
    }, 1000)
})

setTimeout(() => {
    console.log("in to the first timer")
}, 0)

setTimeout(() => {
    console.log("in to the second timer")
}, 0)


console.log("end")

// start , end , in to the first time, in to the second timer , into the promsie

// start , end 

//
promise.then((value)=>{
    console.log(value)
})