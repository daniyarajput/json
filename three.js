console.log("hello")




let myData = {
    "name" : "smith",
    "num" :75,
    "city" : "peshawar",
     "grade" : "C"

}

// ?tw method to get the value

// first method
console.log(myData["grade"])

// ?seconf method

console.log(myData.name)
console.log(myData.num)

// third method 

for(let i in myData){
    console.log(i , myData[i]);
}
