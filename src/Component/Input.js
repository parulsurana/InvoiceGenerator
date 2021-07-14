import { Input } from "@material-ui/core";
import React from "react";
import { styled } from "@material-ui/core/styles";

//styling
const Inputfield = styled(Input)({
  margin: "10px",
  fontSize: "1.2rem",
  justifyContent: "space-around",
  width: "20%",
});
const InputMain = styled("div")({
  display: "flex",
});

function Inputt() {
  return (
    <InputMain>
      <Inputfield required defaultValue="Hello world" />
      <Inputfield required defaultValue="Hello world" />
    </InputMain>
  );
}

export default Inputt;