var name = "john";  //global scope

function fun(){  //global scope
    console.log(name);  // john. // john.  john         john john
    name = "john2";  
    console.log(name); //john2  // john2    john2    john2 jonhn2

    teacher = "ujjwal"
    
}



fun()
console.log(teacher) //ujjwal.   //reference error.     undefined    reference error. reference error

console.log(name)  //undefined  //john   mehsaan.  john2. john



//scopes 

//phase 1: parsing look for format decalration ( var ,let ,const) function 

//phase 2: execute it 

//autoglobal , it will assign in exexution phase if the varible is not declared with var, let or const
