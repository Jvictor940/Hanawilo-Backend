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

const fetch = require ('node-fetch')

const getRickandMorty = async () => {
    try {
        const result = await fetch ('https://rickandmortyapi.com/api/character');
        const data = await result.json()
        console.log(data)  
    } catch (error) {
        console.log(error.message)
    }
}
// console.log(getRickandMorty())

const fetchMultipleAPIs = async () => {
    try {
        const [result1, result2] = await Promise.all ([
            fetch('https://rickandmortyapi.com/api/character/2'),
            fetch('https://randomuser.me/api/?results=1 ')
        ])
        const [rickandmortyapi, randomuser] = await Promise.all([
            result1.json(),
            result2.json()
        ])
        console.log(randomuser)
        console.log(rickandmortyapi)
    } catch (error) {
        console.log(error.message)
    }
}
console.log(fetchMultipleAPIs())