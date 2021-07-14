import React from "react";

import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Input } from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";

//styling
const Billingcard = styled("div")({
  margin: "15px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(142, 201, 228,0.3)",
});
const Billing = styled("div")({
  margin: "10px",
  padding: "20px",
  backgroundColor: "#fff",
  border: "1px solid rgb(0, 0, 0,0.3)",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
});
const InputCard = styled(Input)({
  margin: "5px",
  fontSize: "1.2rem",
  fontStyle: "bold",
  color: "rgb(87, 87, 87)",
  width: "30%",
});
const Input1 = styled(TextField)({
  margin: "10px",
  fontSize: "1rem",
});
const Input2 = styled(Input)({
  margin: "10px",
  fontSize: "1rem",
});

const Country = [
  {
    value: "India",
    label: "India",
  },
  {
    value: "Argentina",
    label: "Argentina",
  },
  {
    value: "Afghanistan",
    label: "Afghanistan",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "Bangladesh",
    label: "Bangladesh",
  },
  {
    value: "HONG-KONG",
    label: "HONG-KONG",
  },
  {
    value: "USA",
    label: "USA",
  },
 
];

function BillingCard({ heading, name, sideline }) {
  const [country, setCountry] = React.useState("India");
  const [phone, setPhone] = React.useState("");
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Billingcard>
      <div
        style={{
          margin: "5px",
          color: "rgb(87, 87, 87)",
          fontSize: "0.9rem",
        }}
      >
        <InputCard
          defaultValue={heading}
          size="small"
          inputProps={{ "aria-label": "description" }}
        />
        ({sideline})
      </div>
      <Billing>
        <Input1
          id="standard-select-currency-native"
          select
          value={country}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Country"
        >
          {Country.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input1>
        <Input2 placeholder={name} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input2 placeholder="Your Email" />
          <MuiPhoneNumber
            name="phone"
            data-cy="user-phone"
            defaultCountry={"us"}
            value={phone}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input2
            placeholder="Your GSTIN (Optional)"
            inputProps={{ "aria-label": "description" }}
          />
          <Input2
            placeholder="Your PAN (Optional)"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <Input2
          placeholder="Your Adress"
          inputProps={{ "aria-label": "description" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Input2
            placeholder="City"
            inputProps={{ "aria-label": "description" }}
          />
          <Input2
            placeholder="Postal Code / Zip Code"
            inputProps={{ "aria-label": "description" }}
          />
        </div>
        <Input1
          select
          value={state}
          SelectProps={{
            native: true,
          }}
          helperText="Please Select Your State"
        >
          {Country.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Input1>
      </Billing>
    </Billingcard>
  );
}

export default BillingCard;