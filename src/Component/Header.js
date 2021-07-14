import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Header.css';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root : {
        borderBottom : 'dotted',
    },
});


const Header = () => {

     const classes = useStyles();
    return (
    <div className="header">
        <TextField className = {classes.root}  id="standard-basic" defaultValue="INVOICE" />
    </div>
    );
};

export default Header;