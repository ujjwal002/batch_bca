// function  fun(task1, task2){
//     task1 = "reactjs";
//     setTimeout(function gun(){
//         console.log("Task completed: " + task1);
//     },2000);

//     task1 = "nodejs";
//     task2 = "expressjs";
// }

// fun("javascript", "typescript");




function test(){
    for(let i=0;i<3;i++){
        // console.log("Value of i: " + i);
        setTimeout(function execute(){
            console.log("Value of i: " + i);
        }, i*1000);
    }

}




test();




// i = 1
// i = 2
// i = 3

// timer = 0s
// timer 1s

// timer 2s