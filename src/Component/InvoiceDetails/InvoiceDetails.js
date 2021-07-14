import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './InvoiceDetails.css';
import { Button, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    root : {
       '& .MuiFormControl-root' : {
           width : '40%',
           margin: theme.spacing(1),
           
       }
    },
}));


const InvoiceDetails = () => {
const classes = useStyles();

    return (
    <div >
        <form className = {classes.root}>
            <Grid container>
             <Grid item xs={3}>
             <TextField required 
             id="standard-required"

              defaultValue="Invoice No"
             />
             <TextField 
              id="standard-basic"
               defaultValue="1000"
             />
               <TextField required
              id="standard-basic"
              defaultValue="Invoice Date"
             />
              <TextField 
              id="standard-basic"
               defaultValue="2021-06-14"
               type ="date"
             />
             <TextField 
              id="standard-basic"
              defaultValue="Due Date"
             />
              <TextField 
              id="standard-basic"
              type="date"
               defaultValue="2021-06-14"
             />

             </Grid>
             <Grid item xs={6}>
             <Button variant="contained">Add Business Logo</Button>
             </Grid>
            </Grid>
        </form>
    </div>
    );
};

export default InvoiceDetails;