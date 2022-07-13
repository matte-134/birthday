const prompt = require('prompt-sync')();
let birthYear;
let monArr = []
let month;
var max = 31
var min = 0
let decision 
let para
let yearFunction = () => {
    const age = prompt('What is your age?');
    birthYear = 2022 - age
    console.log("You were born in " + birthYear);
}
yearFunction();

let seasonFunction = () => {
    const season = prompt('What season is your birthday in?');
    monArr = []
    if (season === 'winter') {
        monArr.push("december", "january", "february")
    } else if (season === 'spring') {
        monArr.push("march", "april", "may")
    } else if (season === 'summer') {
        monArr.push("june", "july", "august")
    } else if (season === 'autumn') {
        monArr.push("september", "october", "november")
    } else {
        console.log("Not a season, try again!")
    }
    console.log("You were born in either " + monArr[0] + ", " + monArr[1] + " or " + monArr[2])
}
seasonFunction();

let monthFunction = () => {
    const firstLetter = prompt('What is the first letter of the month you were born?')
    const lastLetter = prompt('What is the last letter of the month you were born?')
    month = "";
    if (firstLetter === monArr[0].charAt(0) && lastLetter === monArr[0].charAt(monArr[0].length - 1)) {
            month = monArr[0];
        } else if (firstLetter === monArr[1].charAt(0) && lastLetter === monArr[1].charAt(monArr[1].length - 1)) {
            month = monArr[1]
        } else if (firstLetter === monArr[2].charAt(0) && lastLetter === monArr[2].charAt(monArr[2].length - 1)) {
            month = monArr[2];
        } else {
        console.log("please try again")
    }
    function upper (month) {
        return month.charAt(0).toUpperCase() + month.slice(1)
    }
    console.log("You were born in " + upper(month))
}
monthFunction();


let dateFunction = () => {
    let random = Math.round(min + ((max - min) / 2))
    decision = prompt("Were you born on the " + random + "th of " + month + "?")
    if (decision === 'yes') {
        console.log("Your birthdate is: " + random + "th " + month + " " + birthYear)
    } else {
        para = prompt("Is your birthday before or after this date?")
    }
    if (para === 'before') {
        max = random
    } else if (para === 'after') {
        min = random
    } else {
        console.log('Try Again')
    }        
}
dateFunction()
while (decision === 'no') {
    dateFunction()
        }
