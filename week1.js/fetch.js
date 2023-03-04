const fetch = require ('node-fetch')

const getRickandMorty = async () => {
    const result = await fetch ('https://rickandmortyapi.com/api/character');
    const data = await result.json()
    console.log(data)
}
console.log(getRickandMorty())