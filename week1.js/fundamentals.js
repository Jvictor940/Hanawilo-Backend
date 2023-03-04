// Problem #1: What should the following evaluations return?  
2 == '2' // => true
'he' == 'she' // => false
2 === 2 // => true
'true' == true //=> true
true === true // => true
'true' != true //=> false
'true' !== true  //=> true


//Problem #2: What are the three different ways you can declare a variable? And what is the differences 
//between them?  
/*  
    var - All variables created with var can be reassigned, have variable hoisting meaning it can be declared after it has been used. It also has function scope so it can be accessed outside of the function.
    
    let - When you want your value to change throughout your code. let allows us to declare a variable that can be reassigned at any time. let does not allow variable hoisting, and let is scoped at the block level. 
    
    const - constant, Values cannot be changed. const has the same scoping and hoisting rules as let. Even though variables created with const cannot be reassigned does not mean they are immutable. The value cannot be overwritten however the array content or object properties can be changed. The contents of an arraay can be modified woth push(), pop(), or map(). Object Properties can be added, removed, or updated.
    */
   
//    PROBLEM #3
//    Write a simple function for each type of these functions:  
//    - First-Class Function 
//    - Higher-Order Function 
//    - Callback Function 

    // First-Class Function - Assigning a function to a variable
    const firstName = () => {
        console.log("Jerry");
    }
    firstName()
// Higher Order Function - A function that returns a function or takes other functions as arguments. 
    function hustle() {
        return () => {
            console.log("Be Great!")
        };
    }

// CallBack Function - Passing a function as an argument to another function 
    function sayHello() {
        return 'Hello, ';
    }

    function greeting(helloMessage, name) {
        console.log(helloMessage() + name);
    }

    greeting(sayHello, 'JavaScript')

 




// Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?  
 
const a = 'hi';  
console.log(c);  
 
const someFunction = (arg) => { 
    const b = 'bye';  
 
    if (arg) { 
        const c = 'see ya!'; 
        console.log(a);  
        console.log(b);  
    }  
} 

(a) // => 'hi'
(b) // => 'bye'
(c) // => 'undefined'

// Problem #5: Given the following data structure, write a for loop using:  
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
//- For statement 
//- For...of  
 
//The for loops should console.log out each of the values in order like this: e. g. 1, 2, 3, 4, 5, 6, 7, 8 ... 
 function forLoop (){
     for (let i = 0; i < someArray.length; i++){
        console.log(someArray[i])
     }
 }

 function forOfLoop() {
    for (const num of someArray){
        console.log(num)
    }
 }

 console.log(forloop())
 console.log(forOfLoop())

/*
Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative):  
const someArray = [1, 2, 3, 4, 5]; 
 
- Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5] 
- Use the length property to return the length of the array 
- Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5] 
- Use the find() method to find and return the value of 5.  
- Use the slice() method to return back this array: [3, 4] 
- Use the splice() method to return back this array: [1, 2, 5] 
- Use the includes() method to return back TRUE when I pass in “4” into the includes method.  
- Use the indexOf() method to return back the index of the element “2” 
- Use the isArray() method to return back TRUE when I pass in the array 
- Use the join() method to return back: “1, 2, 3, 4, 5” 
- Use the map() method to return back a new array: [2, 4, 6, 8, 10] 
- Use the pop() method to return back a new array: [1, 2, 3, 4] 
- Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6] 
- Use the shift() method to return back a new array: [2, 3, 4, 5] 
- Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5] 
- Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return:     
[1, 3, 5, 9] 
- Use the reduce() method to return back the sum of all numbers in the array  
*/

const firstArray = [1, 2, 3];
const secondArray = [4, 5]

// concate()
const bothArrays = firstArray.concat(secondArray)
console.log("Both Arrays:", bothArrays)

// length property
bothArrays.length

// filter()
const nums = bothArrays.filter((num) => {
    return num !== 3 
})
console.log("Array w/o 3:", nums)

// find()
const found = bothArrays.find(five => five === 5)
console.log('Five:', found)

// slice()
const newArr = bothArrays.slice(2, 4)
console.log('Slice:', newArr)

// splice()
const spliceArr = [1, 2, 3, 4, 5]
spliceArr.splice(2, 2)

// includes()
bothArrays.includes(4)

// indexOf()
bothArrays.indexOf(2)

// isArray()
Array.isArray(bothArrays)

// join()
bothArrays.join()

// map()
const mapArrays = bothArrays.map(num => num * 2)
console.log('Mapped Arrays:', mapArrays)

// pop()
bothArrays.pop()

// push()
bothArrays.push(5, 6)

// shift()
const arr = [1, 2, 3, 4, 5]
arr.shift()

// unshift()
arr.unshift(0, 1)

// sort array from smallest to largest
const sortArray = [9, 1, 3, 5]
sortArray.sort()

//  or 

// for larger numbers
sortArray.sort(function(a, b) {
    return a - b 
});

// reduce() return the sum of all number
const sumOfAllNumbers = sortArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


/*
Problem #7: Given the following data structure:  
const someObject = { 
    color: 'black' 
} 
- Use the assign() method to add a new key value pair of:   name: ‘john doe’ 
- Use the dot notation to add a new key value pair of:    age: 22 
- Use the bracket notation to add a new key value pair of:    address: ‘123 test address’ 
- Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”] 
- Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test 
address”] 
- Use the for...in loop against this object to console.log each of the keys values.  
Your terminal should return:  
 
- // black 
- // john doe 
- // 22 
- // 123 test address 
*/
// Add a new key value pair using Object.assign()
const someObject = {
    color: 'black'
}

Object.assign(someObj, {name: "john doe"})

// Dot Notation
someObject.age = 22 

// Bracket Notation
someObject['address'] = '123 test address'

// keys() returns an array back of all the keys in an object
Object.keys(someObject)

// Values returns an array back of all the values in an object
Object.values(someObject)

// for...in
for (let key in someObject){
    console.log(someObject[key])
}


//Problem #8: Given the following data structure:  
const numbers = [ 
    { 
        num: 1 
    }, 
    { 
        num: 2 
    }, 
    { 
        num: 3 
    } 
] 
// - Use either the for statement or for...of loop to console.log each of the keys. Values.  
// Your terminal should return 
// 1 
// 2 
// 3 

for (let {num} of numbers) {
    console.log(num)
}

/*
Problem #9: Create a new Set() object 
- Add a new value of:    ‘john doe’ 
- Check if the value of ‘john doe’ exists 
- Remove the value of ‘john doe’ 
*/
const newSet = new Set()
newSet.add('john doe')
newSet.delete('john doe')

/*
Problem #10: Create a new Map() object 
- Add a new key-value pair of:    name: ‘john doe’ 
- Check if the value ‘john doe’ exists 
- Remove the key-value pair of ‘john doe’ 
*/
const map1 = new Map()
map1.set('name', 'john doe')
console.log(map1.get('name'))
map1.delete('name')
 
// Problem #11: Explain what asynchronous programming means in 3 sentences. 
/* Asynchronous programming is a technique thaht enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs. Rather than having to wait for that task to finish to run the rest of your program. An example of that would be making an HTTP request using fetch(). */
 
// Problem #12: Explain what call back hell is. 
/* Callback hell is essentially nested callbacks stacked below one another. Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. */
 
// Problem #13: Explain what is a promise and describe the possible states of promises.  
/* A Promise is an object representing the eventual completion or failure of an async operation. Essentially it is a returned object to which you attach callbacks, instead of paassing callbacks into a function. */
 
// Problem #14: What is async/await? 
/* The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. */

/*
Problem #15: Create two async functions:  
- fetchRickAndMorty 
o Using this api: https://rickandmortyapi.com/api/character 
o Use a try/catch block 
o Your catch block should: console.log(error.message) 
o Fetch this api, and the function should return a payload of a ARRAY of the Characters’ name 
such as shown below:  
§ [“Rick Sanchez”, “Morty Smith”, “Tom Jones”, .... ] 
o Hint: What array methods can you use to get the result above?? 
- fetchMultipleAPIs 
o Using these apis: 
§ API 1: https://rickandmortyapi.com/api/character/2  
§ API 2: https://randomuser.me/api/?results=1  
o Use a try/catch block 
o Your catch block should: console.log(error.message) 
o Using a Promise.all() method, fetch both of these api’s concurrently, and the function should 
return a payload of the Names from each payload such as shown below:  
§ [“Morty Smith”, “Tony Kim”]  
§ The first value “Morty Smith” should be coming from API 1.  
§ The second value “Tony Kim” should be coming from API 2. Keep in mind, this second 
API will have a new random user each time you call it! 
*/

/*
Problem #16: OOP 
In this task create a Shape class. It has three properties: name, sides, and sideLength. This class only models 
shapes for which all sides are the same length, like a square or an equilateral triangle. 
We'd like you to: 
• Add a constructor to this class. The constructor takes arguments for the name, sides, 
and sideLength properties, and initializes them. 
• Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of 
the shape's outer edge) and logs the result to the console. 
• Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and 
a sideLength of 5. 
• Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the 
browser's console as expected. 
• Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3. 
• Call triangle.calcPerimeter() to check that it works OK. 
*/

/*
Problem #17: OOP (Part 2) 
Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that 
calculates the square's area. Also set up the constructor so that the name property of Square object instances 
is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, 
you should therefore just need to provide the sideLength property. 
Create an instance of the Square class called square with appropriate property values, and call 
its calcPerimeter() and calcArea() methods to show that it works OK. 
*/

/*
Problem #18: Using Git, please push this code up to your GitHub repo following the directions:  
 
1. Initialize your project:   git init 
2. Git checkout to:    git checkout -b week1-day 
3. Git add all commits:    git add --all 
4. Git commit:    git commit -m ‘week1-day1 assignment complete’ 
5. Push to your remote branch:    git push 
*/
 
 
 
 
 
 