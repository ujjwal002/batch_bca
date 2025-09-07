console.log("start")


setTimeout(()=>{
    console.log("in to the time")
},0)

setTimeout(()=>{
    var promise = new Promise((resolve,reject)=>{
        resolve("in to promises")
    })

    promise.then((value)=>{
        console.log(value)
    })
},0)

setTimeout(()=>{
    console.log("in to the second time")
},0)

console.log("end")

// start ,end , in to the time, in to the promises, in to the seoc0nd time

// 