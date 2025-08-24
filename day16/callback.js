// callback

// a callback is just a function that you give to another function and it will called later when the 
// task is dont


function fun(name, callback) {
    console.log("inside fun function");
    console.log("hello " + name);
    callback();
}

function callMe() {
    console.log("i am callback function");
}

greet("ujjwal", callMe);


// why do we need callback functions


// javasciript is sigle threaded language ( it can do one thing at a time)

// but sometime , task take time like

// reading file , fetching data from server, waiting for user input

// instead of stoping everything javascript continue

// other works and uses a callback to run the function when the task is done


// lets say you are fetching data from server and 

// then you want to display that data


// function allData(data, callback) {
//     console.log("fething data from server");
//     setTimeout(() => {
//         console.log("data fething done");
//         callback(data);
//     }, 3000);
// }

// function displayData(data) {
//     console.log("displaying data");
//     console.log(data);
// }


// var fun = function (){
//     console.log("i am callback function");
// }

// fun();


// callback hell


// function fun(name, callback){
//     function fun(name, callback){
//         function gun(name,callback){
//             console.log("inside gun function");
//             console.log("hello " + name);
//             callback();
//         }
//         console.log("inside fun function");
//         console.log("hello " + name);
//         gun(name, callback);

//     }
// }


// getUser(1,function(user){  htis is http requecting
//     getPost(user.id,function po st(){ this is also a http request
//         getComment(posts[0].id, function comments(){
//             getLike(comments[0].id),function likes(){
//                 console.log(likes);
//             });

//             getLike(like[0].id),function share(){
//                 console.log(share)
//             }
//         });
//     });
// });
// );


- getUser
- getPost
- getComment
- getLike


//how to escape this callback hell use promises