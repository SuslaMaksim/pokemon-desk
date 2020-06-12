import React, {useEffect} from "react";
import {thankCreatorGetPokemon} from './reducer';
import {connect} from 'react-redux'
import Pokemon from "./Pokemon";

let PokemonContainer = (props)=>{

    const id = props.match.params.pokemonID;

    let {pokemonCard} = props
    useEffect(()=>{
        props.thankCreatorGetPokemon(id)
    },[])

    return(
        <>
            {pokemonCard ? <Pokemon {...props}/> : <h1>Loading...</h1>}


        </>
    )
}

let mapStateToProps = (state)=>{
    return{
        pokemonCard: state.mainData.pokemonCard
    }
}
export default connect(mapStateToProps,{thankCreatorGetPokemon})(PokemonContainer);