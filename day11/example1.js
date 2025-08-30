var name = "john"; 

function fun(){ 
    console.log(name);  
    name = "john2";  
    console.log(name);

    teacher = "ujjwal"
    
}


console.log(teacher) 
fun()


console.log(name)  



//scopes 

//phase 1: parsing look for format decalration ( var ,let ,const) function 

//phase 2: execute it 

//autoglobal , it will assign in exexution phase if the varible is not declared with var, let or const
