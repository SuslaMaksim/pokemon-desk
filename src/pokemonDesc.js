import React,{useEffect} from "react";
import {connect} from 'react-redux'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PokemonDeskCreator from './pokemonDeskCreator';
import {makeStyles} from "@material-ui/styles";

import {thankCreatorGetData,filterCreator} from './reducer';
import Header from "./header";


let useStyle = makeStyles({
    searchContainer:{

    }
})

let PokemonDesk = (props)=>{


useEffect(()=>{
    props.thankCreatorGetData()
},[])


    return(
        <>
            <Header />

            {
                props.mainData ? <PokemonDeskCreator {...props}/> : <h1 style={{textAlign:"center"}}>Just Download ...</h1>
            }



        </>
    )
}
let mapStateToProps = (state)=>{
    return{
        mainData: state.mainData.data,
        filter: state.mainData.filter
    }
}
export default connect(mapStateToProps,{thankCreatorGetData,filterCreator})(PokemonDesk);