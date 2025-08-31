console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);



var number = 21;
const fun = new Promise((resolve, reject) => {
    if (number == 20) {
        resolve("my value is equal to 20")
    }
    else {
        reject("my value is not greater or less that 20")
    }
})

fun.then((value) => {
    console.log(value)
})
.catch((value) => {
    console.log(value)
})

console.log("End");


//start 
// my value is not greater or less than 20
//end



// api call is promises, 


// what is happenining behind the scene is

// first the code which is natively know to js, will go in call stack first 

// event loop keep checking call stack got empty or not 


// then functionality like setTimeout , setInterval, and other functionality will go in event queue( macro task)

// functionality like promised will go in microtask , 

// between the macro and micro , micro is given more prioirty 
