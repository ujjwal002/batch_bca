// let say , there is piece of code which is asyn in nature

// it will not hinder the execution of other code

// that piece of code is depend on some other code

//showing a data depend on fetching the data

// http , setTimeout , other code which are not natively to know to js behave like asynchromous


// but i want to make this asynchromouse code work like synchronouse

// callback 

// promises


async function getUser(){
    const response = await axios.get('/fetchUSer') // intially http is asynshronouse

    const showUser  = await axios.post('/post user',response)
}

getUser()


//asyn functin return a promise , inside await is pauses this function until the awaited promise settle


