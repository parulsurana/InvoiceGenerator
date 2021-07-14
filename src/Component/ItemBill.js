import { Button, makeStyles, styled, TextField } from "@material-ui/core";
import React from "react";
import "./ItemBill.css";
import CancelIcon from '@material-ui/icons/Cancel';

const Itemcard = styled("div")({
  margin: "15px",
  backgroundColor: "rgb(243, 245, 247);",
});

const Header = styled("div")({
  display: "grid",
  columnGap: "0.5rem",
  gridTemplateColumns: "repeat(13, 1fr)",
  padding: "1rem",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
  backgroundColor: "rgb(142, 201, 228,0.3)",
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
  flexDirection: "column",
});

const Input5 = styled(TextField)({
  margin: "10px",
  fontSize: "0.875rem",
  display: "flex",
  flexDirection: "column",
});

const Input7 = styled(CancelIcon)({
  margin: "2%",
  cursor: "pointer",
});

export default function ItemBill() {
  return (
    <div>
      <Itemcard>
        <div>
          <input
            style={{ display: "none" }}
            accept="image/*"
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
            <Input3 defaultValue="₹ 1"></Input3>
            <Input4 defaultValue="₹ 1"></Input4>
            <Input7>
              <CancelIcon />
              </Input7>
          </ItemDetails>
          <Input5 placeholder="Add Description"></Input5>

          <label htmlFor="contained-button-file">
            <Button
              style={{ margin: "20px" }}
              variant="contained"
              color="primary"
              component="span"
            >
              Add Image
            </Button>
          </label>
        </div>
      </Itemcard>
    </div>
  );
}