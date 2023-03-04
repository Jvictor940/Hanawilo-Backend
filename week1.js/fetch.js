const fetch = require ('node-fetch')

const getRickandMorty = async () => {
    const res = await fetch ('https://rickandmortyapi.com/api/character');
    const data = await res.json()
    console.log(data)
}