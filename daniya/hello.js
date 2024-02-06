// setTimeout(funct ion(){
//     console.log("HELLO WORLD")
// },3000)



// setInterval(function(){
//     document.write("WOW")
// },2000)



// let prmiseOne = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("THIS IS FIRST PROMISE")
//     },2000)
// })




// for getting all value
let promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name: "Ali" , email : "ali@gmail.com"})
    },4000)
})

promiseTwo.then(function(user){
    console.log(user)
})





// for getting one value
let promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "peter" , password : "1234566785" ,email : "daniya@gamil.com"})
    },2000)
})
promiseThree.then(function(user){
    return user.email})
.then(function(pass){
    console.log(pass)
})


let promiseFour = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({myNmae : "haziq" , password : "5264"})
        }
        else{
            reject("ERROR : SOMETHINK WENT WRONG")
        }
    },3000)

})

promiseFour.then(function(myvalue){
    console.log(myvalue)
})

.catch(function(error){
    console.log(error)
})

.finally(function(){
    console.log("FINALLY!")
})




let promiseFive = new Promise (function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({musername : "mr chicken" , password : "4444"})
        }
        else{
            reject("ERROR in JS : SOMETHINK WENT WRONG")
        }
    },1000)

})

