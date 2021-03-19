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
    randomArray[i]=Math.floor(Math.random()* 400) +1
}
console.log(randomArray)

// 27 Wrote a function to get the MAX and the MIN from the previously created array

let minAndMax= function (){
let maxOf= Math.max(...randomArray)
let minOf= Math.min(...randomArray)
console.log ("The max number is " + maxOf +" and the min number is " + minOf)

}
minAndMax ()

// 28 Create an array of arrays, in which every array has 10 random numbers
let randomArray = []
for (let i=0; i<11; i++) {
    randomArray[i]=Math.floor(Math.random()* 100) }
let bigArray = []
for ( i=0; i<4; i++) {
    bigArray[i]= randomArray
   }


console.log(bigArray)

// 29 Create a function that gets 2 arrays and returns the longest one
const  compare= function (array1, array2) {
    if (array1.length>array2.length) {
        console.log(array1)
    } else (consle.log(array2))
    }
// 30 Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

const getBigger= function (arr1, arr2) {

    let sumOfArr1 = 0
    let sumOfArr2 = 0
    
    for (i=0; i<arr1.length; i++) {
       sumOfArr1= sumOfArr1 +arr1[i]
    }
    for (i=0; i<arr2.length; i++) {
        sumOfArr2= sumOfArr2 +arr2[i]
    
    }
    if (sumOfArr1>sumOfArr2) {
        console.log(arr1)
    } else {(console.log(arr2))
    }
    }
    getBigger([1,2,3], [4,5,6])