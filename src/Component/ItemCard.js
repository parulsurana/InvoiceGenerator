import { Button, makeStyles, styled, TextField } from '@material-ui/core';
import React from 'react'
import "./ItemCard.css";


const Itemcard = styled("div")({
    margin: "20px",
    backgroundColor: "rgb(243, 245, 247);",
});

const Header = styled("div")({
    display: "grid",
    columnGap: "0.5rem",
    gridTemplateColumns: "repeat(13, 1fr)",
    padding: "1rem",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    backgroundColor: "rgb(115, 61, 217)",
});

const ItemDetails = styled("div")({
    backgroundColor: "rgb(243, 245, 247)",
    display: "flex",
});

const Input1 = styled(TextField)({
    margin: "10px",
    fontSize: "0.875rem",
    flex: ".49",
});

const Input2 = styled(TextField)({
    margin: "10px",
    fontSize: "0.875rem",
    flex: ".15",
});

const Input3 = styled(TextField)({
    margin: "10px",
    fontSize: "0.875rem",
    flex: ".15",
});

const Input4 = styled(TextField)({
    margin: "10px",
    fontSize: "0.875rem",
    flex: ".1",
    flexDirection: "column"
});

const Input5 = styled(TextField)({
    margin: "20px",
    fontSize: "0.875rem",
    display: "flex",
    width: "40%",
    flexDirection: "column"
});


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function ItemCard() {
    const classes = useStyles();
    return (<div>
        <Itemcard>

            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <Header cols="13">
                    <span className="item">Item</span>
                    <span className="quantity">Quantity</span>
                    <span className="quantity">Rate</span>
                    <span className="quantity">Amount</span>
                    <span className="null"></span>
                </Header>
                <ItemDetails>
                    <Input1 placeholder="Item Name"></Input1>
                    <Input2 defaultValue="1"></Input2>
                    <Input3 defaultValue="1"></Input3>
                    <Input4 defaultValue="1"></Input4>
                    <span className="cross">X</span>
                </ItemDetails>
                <Input5 placeholder="Add Description"></Input5>

                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Add Image
                    </Button>
                </label>
            </div>
        </Itemcard>
       <div className="newline">
      <span className="text">+ Add New Line</span>
       </div>
        </div>

    )
}
