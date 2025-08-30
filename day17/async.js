// javascript is synchornouse in nature

// but with the help of node js we make it work like asynschrous , like setTimeout ,setInterval

// http request, reading file , writing file , these are the function provided by node js

// single threaded and multi threaded 

// let say worker is making a house 


// there will be one worker , or there will be muliple worker


// if it is one worker, then he will finish one taks first then will do another 

// if there is multiple worker, each worker will do it own task ,may be or may not , 

// two worker are dependent on each other, but most of time they do their task in parrel

// lets say one worker is painting , anothe worker is preparing the painting 


// now javascript have capability of asynchorusn with the help of node js

// let say if on asynchrous task is dependent on another asynchronouh task 

// if one will finish it job , then after that another will start coz first one have to share something

// you guys are full stack developer

// fronted will also work independely 
// backend guys could also work independeltly

// in the same if you have to make asynchronus task work like synchonous

// this is some asynchrnous taks

//this is another async task

// means you are want make asynchrous task work like synchorunous

// there are three way

// callback
// promises
// async await


// call the waiter and waiter went to chef and chef start preparting your order 


// this is asynchrounouse task 


// function fun(name, callback) {
//     console.log("inside fun function");
//     console.log("hello " + name);
//     callback();
// }

// function callMe() {
//     console.log("i am callback function");
// }


// greet("ujjwal", callMe);



// orderFood(function(pizaa){
//     orderBiryani(function(biryani){
//         orderDrinks(function(drink){
//             orderWater(function(water){
//                 console.log("ear,",pizaa,biryani, drink,water)
//             })
//         })
//     })
// })


// here think about you are a chef here

// you operate a cloud kitchen , you are single threaded, you are only worker here

// if somebody order pizza first you start preparing the pizza, then you get another phone call about biryani 
// you cant prepare everythinga at once , 


//

// if you do the same thing with promise


// orderPizza()
// .then(pizza=>orderBiryani())
// .then(burger=>orderBurger())
// .then(coke=>orderCoke())

// console.log("hello")
// setTimeout(function fun(){
//     console.log("i am setTimeout")
// },2000)

// console.log("end")



// you are hitting some api ok , it will sync or async


// you are hitting some api here 

// you are using its resonse here

// console.log("response")

// undefined

// 

// const response = hitting some api here

// console.log("response")


var response;

setTimeout(function fun(){
    response = "i am asuync in nature"
},0)


console.log(response)


