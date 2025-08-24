fetch("/data.json")
.then(r=>r.json())
.then(data=>data.items)
.then(items=>{
    if(items.lenght){
        console.log(items.lenght)
    }
    else{
        console.log("items has not valeu")
    }
})

.then
.then
.then
.then

//http -> will reutrn you a CSSMathValue, or either it will not return a value , for same case if your api
// goes in to pending state