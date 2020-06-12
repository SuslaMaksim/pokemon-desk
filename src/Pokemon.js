import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {toUperFirsLetter} from './helper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


let Pokemon = (props) =>{

    let {pokemonCard,history} = props;
    let{name,id,height,weight,sprites} = pokemonCard;
    let fullSize = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    console.log(name,id,height,weight,sprites)
    return <div>
        <Typography variant='h1'>
            {id}.{toUperFirsLetter(name)}
            <img src={sprites.front_default} />
        </Typography>
        <img src={fullSize} style={{height: '300px',width: '300px'}}/>
        <Typography variant='h3'>Pokemon Info:</Typography>
        <Typography >Height: {height}</Typography>
        <Typography >Weight: {weight}</Typography>
        <Button style={{backgroundColor: '#00bcd4'}}
                startIcon={<ArrowBackIcon/>}
                variant='contained'
                onClick={()=>history.push('/') }> Back to Pokemons</Button>
    </div>
}

export default Pokemon;