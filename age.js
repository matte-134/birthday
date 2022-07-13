const prompt = require('prompt-sync')({sigint: true})

var max = 100
var min = 0
let decision 
let para
let myFun = () => {
    let random = Math.round(min + ((max - min) / 2))
    decision = prompt("Are you " + random + " years old?")
    if (decision === 'yes') {
        console.log("You are " + random + " years old!")
    } else {
        para = prompt("Are you older or younger than " + random + '?')
    }
    if (para === 'younger') {
        max = random
    } else if (para === 'older') {
        min = random
    } else {
        console.log('Try Again')
    }        
}
myFun()
while (decision === 'no') {
    myFun()
        }




