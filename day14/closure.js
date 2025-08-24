// setTimeout(callbackfunction , time)


// a callback function is a functin that is passed to another function 


console.log("start");

// setTimeout(function (){
//     console.log("I am a callback function");
// },1000)

// console.log("end");


setInterval(function (){
    console.log("I am a callback function that runs every 2 seconds");
}, 2000);


console.log("end");


// start , 