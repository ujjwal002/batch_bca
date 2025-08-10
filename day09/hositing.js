

fun();
top();  //global scope

function fun (){ //global scope
    var name = "hositing";
    console.log(name); 
}
function top(){ // global scope
    console.log("top");
}



// it will look for var let const and function in the first flow and give a scoping to that variable or function
