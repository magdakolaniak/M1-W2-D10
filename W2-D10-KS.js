// JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete Email from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string in the previous array
//         26) Create an array with 100 random numbers in it
//         27) Wrote a function to get the MAX and the MIN from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays and returns the longest one
//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

// 21 Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x="John"
let y= "Doe"
console.log () 

// 22 Create an object with properties such name, surname, email
let newObject= {
    name: "Magdalena",
    surname: "Kolaniak",
    email: "magda.kolaniak@gmail.com",
}
// 23 Delete Email from the previously created object
delete newObject.email

// 24 Create an array with 10 strings in it
let fruitsArray= ["apple", "orange","lemon", "strawberries", "pineaple", "watermelon", "grape", "raspberries", "plum", "pear"]

// 25 Print in the console every string in the previous array
console.log(fruitsArray)

// 26 Create an array with 100 random numbers in it
let randomArray = []
for (let i=0; i<101; i++) {
    randomArray[i]=Math.floor(Math.random()*100)
}
// console.log(randomArray)

// 27 Wrote a function to get the MAX and the MIN from the previously created array
Math.max(...randomArray)

console.log(Math.max(...randomArray))