import {PokemonApi} from "./api";

const DOWNLOAD = "DOWNLOAD_DATA";
const GET_POKEMON = "GETPOKEMON";
const IS_POKEMON = "IS_POKEMON";
const FILTER = 'FILTER';




let InitialState = {
            data: null,
            pokemonCard: null,
            isPokemon: true,
            filter: ''

}

let MainReducer = (state = InitialState,action)=>{
    switch (action.type) {
        case DOWNLOAD:
            return{
                ...state,
                data: {...action.pokeData.map((pokemon,index)=>{
                    return{
                        name: pokemon.name,
                        id: index + 1,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`

                    }
                    })}
            }
        case GET_POKEMON:
            return {
                ...state,
                pokemonCard: {...action.pokemonCard}
            }
        case IS_POKEMON:
            return {
                ...state,
                isPokemon: action.pokemon
            }
        case FILTER:
            return {
                ...state,
                filter: action.filter
            }



        default: return state
    }
}

export default MainReducer;

let GetPokemonData =(pokeData)=> ({type:DOWNLOAD,pokeData});
let GetPokemonCardActionCreator = ( pokemonCard)=> ({type:GET_POKEMON, pokemonCard});
let isPokemonCreator = (pokemon)=> ({type:IS_POKEMON,pokemon});
export let filterCreator = (filter) =>({type:FILTER, filter})


export const thankCreatorGetData = ()=>(dispatch)=>{
    PokemonApi.getPokemons()
        .then(response => {
            dispatch(GetPokemonData(response.data.results))
        })
}

export const thankCreatorGetPokemon = (id)=>(dispatch)=>{
    PokemonApi.getPokemon(id)
        .then(response => {
           dispatch(GetPokemonCardActionCreator(response.data))
        })
}