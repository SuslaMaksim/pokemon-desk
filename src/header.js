import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles,fade} from "@material-ui/core/styles";
import {connect} from 'react-redux'

import {filterCreator} from './reducer';
let useStyle = makeStyles(theme=>({
    searchContainer:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        padding: '5px',
        margin:  '5px'
    },
    searchIcon:{
        marginRight: '10px'
    }
}))


const Header = (props)=>{
    const classes = useStyle()
    let changeFilter =(e)=>{
        props.filterCreator(e.target.value)

    }
    return(
    <AppBar position='static'>
        <Toolbar>

            <div className={classes.searchContainer}>
                <SearchIcon className={classes.searchIcon}/>
                <TextField  className={classes.textField } onChange={changeFilter} value={props.filter} label='Finde Pokemon' variant='standard' />
            </div>

        </Toolbar>
    </AppBar>
    )
}

let mapStateToProps = (state)=>{
    return{
        filter: state.mainData.filter
    }
}
export default connect(mapStateToProps,{filterCreator})(Header)