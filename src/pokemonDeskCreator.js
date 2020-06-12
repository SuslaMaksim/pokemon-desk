import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {toUperFirsLetter} from './helper'

let useStyle = makeStyles({
    cardStyle:{
        padding: "20px",
    },
    cardImage:{
        margin: 'auto',
        width: '100%',
        maxWidth: "200px",
        height: '200px'
    }

})


const DeskCreator = (props)=>{
    let classes = useStyle();
    let{mainData,history,filter}= props;

    let getPokemonCard = (pokemonId)=>{
        let{name,id,sprite} = mainData[pokemonId]

        return(
            <Grid item sm={6} xs={12}  lg={3}  md={4} key = {id} >
                <Card onClick={()=> history.push(`/${id}`)} style={{cursor: "pointer"}}>
                    <CardContent className={classes.cardContant}>
                        <CardMedia image={sprite} className={classes.cardImage} />

                        <Typography >
                            {id} : {toUperFirsLetter(name)}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )

    }
    let toArreyPokeCards = Object.keys(mainData).map(currentId => {
       if(mainData[currentId].name.includes(filter)) return getPokemonCard(currentId)
    });



    return(
        <Grid container spacing={3} className={classes.cardStyle}>
            {toArreyPokeCards}
        </Grid>
    )
}

export default DeskCreator ;