function todo(task){
    setTimeout(function (){
        console.log("Task completed: " + task);
    }, 1000);

    console.log("in to the function ")
   
}


console.log("starting");

todo("Clean the house");
console.log("Ending");


// at the time instance when function settimout is callled , the todo function is already executed , if fun 
// is called after the completion of to do , todo has ended , how setimeout is able to access the task varible

// this is because of closure , closure is a function "remember" its lexical scope  even 
// when the functin is execute outside the lexical scope


// if setTimeout is completed it will be removed from the call stack , how actullly the varible still persisit


