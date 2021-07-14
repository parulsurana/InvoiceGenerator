import {
    Button,
    Input,
    TextField,
    InputBase,
    InputAdornment,
  } from "@material-ui/core";
  import React from "react";
  import { styled } from "@material-ui/core/styles";
  import BillingCard from "./BillingCard";
  import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
  import {
    Add,
    AddCircleOutline,
    Autorenew,
    LocalOffer,
    MailRounded,
    SportsRugbySharp,
    TagFaces,
  } from "@material-ui/icons";
  import MaterialUiPhoneNumber from "material-ui-phone-number";
  import ItemBill from "./ItemBill";
  import SaveIcon from "@material-ui/icons/Save";
  
  //styling
  const InputHead = styled(InputBase)({
    margin: "20px",
    fontSize: "2rem",
    textAlign: "center",
    width: "20%",
  });
  const Formm = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    margin: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  });
  const FormTop = styled("div")({
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  });
  const Logobtn = styled("div")({
    display: "flex",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "rgb(0, 0, 0,0.1)",
    border: "1px dotted rgb(0, 0, 0,0.5)",
    margin: "auto",
  });
  const Terms = styled(InputBase)({
    fontSize: "1rem",
    fontStyle: "bold",
  });
  const TermsInput = styled(Input)({
    fontSize: "0.8rem",
    fontStyle: "bold",
    marginTop: "5px",
    marginBottom: "5px",
  });
  const MailIcon = styled(MailRounded)({
    fontSize: "1.2rem",
    color: "red",
  });
  const Btn = styled(Button)({
    fontSize: "1rem",
    backgroundColor: "skyblue",
    margin: "15px",
  });
  
  function Form() {
    return (
      <Formm>
        <InputHead defaultValue="INVOICE" />
        <div style={{ margin: "20px" }}>
          <FormTop>
            <div
              style={{
                flex: "0.6",
                marginLeft: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  id="standard-required"
                  defaultValue="Invoice No."
                />
                <TextField
                  style={{ width: "39%" }}
                  required
                  id="standard-required"
                  defaultValue="00001   "
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  marginTop: "10px",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  id="standard-required"
                  defaultValue="Invoice Date"
                />
                <TextField
                  required
                  id="standard-required"
                  defaultValue="2021-06-14"
                  type="date"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  marginTop: "10px",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  required
                  id="standard-required"
                  defaultValue="Due Date"
                />
                <TextField
                  required
                  id="standard-required"
                  defaultValue="2021-06-14"
                  type="date"
                />
              </div>
            </div>
            <div style={{ flex: "1" }}>
              <Logobtn>
                <InsertPhotoIcon />
                Add Business Logo
              </Logobtn>
            </div>
          </FormTop>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <BillingCard
              heading="Billed By"
              name="Yours Buisness"
              sideline="yours details"
            />
            <BillingCard
              heading="Billed to"
              name="Yours Branch"
              sideline="yours Client details"
            />
          </div>
  
          <div>
            <ItemBill />
            <div className="newline">
              <span className="text">Add New Line</span>
            </div>
          </div>
  
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1.2" }}></div>
            <div style={{ flex: "0.4", margin: "15px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                  fontWeight: "400",
                  fontSize: "1.2rem",
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                <LocalOffer />
                Add Item Discount
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                  fontWeight: "400",
                  fontSize: "1.2rem",
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                <AddCircleOutline />
                Add Discount / Reductions
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                  fontWeight: "400",
                  fontSize: "1.2rem",
                  color: "rgba(0,0,0,0.8)",
                }}
              >
                <AddCircleOutline />
                Add Additional Charges
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px",
                  fontWeight: "800",
                  fontSize: "1.5rem",
                  color: "rgba(0,0,0,0.5)",
                }}
              >
                <div>Total (INR)</div>
                <div>₹1</div>
              </div>
            </div>
          </div>
  
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              margin: "15px",
              backgroundColor: "rgb(142, 201, 228,0.3)",
            }}
          >
            <Terms defaultValue="Terms and Condition" />
            <TermsInput
              value="Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments."
              startAdornment={
                <InputAdornment position="start">1.</InputAdornment>
              }
            />
            <TermsInput
              value="Please quote invoice number when remitting funds."
              startAdornment={
                <InputAdornment position="start">2.</InputAdornment>
              }
            />
            <div className="newline1">
              <span>Add New Term</span>
            </div>
          </div>
          <div
            style={{
              padding: "15px",
              margin: "15px",
              backgroundColor: "rgb(142, 201, 228,0.3)",
            }}
          >
            <Terms defaultValue="Your Contact details"/>
            <div style={{ fontSize: "1rem" }}>
              For any enquiry, reach out via email at{" "}
              <Input
                placeholder="Your Email"
                startAdornment={
                  <InputAdornment position="start">
                    <MailIcon />
                  </InputAdornment>
                }
              />
              {"  "}
              or call on
              <MaterialUiPhoneNumber
                name="phone"
                data-cy="user-phone"
                defaultCountry={"us"}
                value=""
              />
            </div>
          </div>
          <Btn
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
          >
            Save
          </Btn>
        </div>
      </Formm>
    );
  }
  
  export default Form;