
import axios from 'axios'

export const PokemonApi ={
    getPokemons(){
        return axios.get('https://pokeapi.co/api/v2/pokemon?limit=256')
    },
    getPokemon(id){
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    }
}