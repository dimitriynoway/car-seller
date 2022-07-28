import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const CreateCarField = () => {
  const enpoint = "http://localhost:5000";

  const [state, setState] = useState({
    firm: "BMW",
    mark: "x3",
    year: 2014,
    power: 222,
    transmission: "Full",
    technicalStatus: "new",
    price: 20000,
  });

  const createCar = async () => {
    const resp = await axios.post(`${enpoint}/car`, state);

    console.log({ resp });
    console.log({ data: resp.data });
  };

  return (
    <Box display={"flex"} flexDirection="row">
      {" "}
      <Box
        width="20em"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
        <Typography align="center">Create Car</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          flexDirection="column"
          display="flex"
        >
          <TextField
            id="outlined-basic"
            label="Firm"
            variant="outlined"
            value={state.firm}
            type="string"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, firm: e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Mark"
            variant="outlined"
            value={state.mark}
            type="string"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, mark: e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={state.year}
            type="number"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, year: +e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Power"
            variant="outlined"
            value={state.power}
            type="number"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, power: +e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Transmission"
            variant="outlined"
            value={state.transmission}
            type="string"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, transmission: e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="TechnicalStatus"
            variant="outlined"
            value={state.technicalStatus}
            type="string"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, technicalStatus: e.target.value };
              });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={state.price}
            type="number"
            onChange={(e) => {
              setState((prevState) => {
                return { ...prevState, price: +e.target.value };
              });
            }}
          />
        </Box>
      </Box>
      <Box paddingTop={"2em"}>
        <Button variant="contained" onClick={() => createCar()}>
          Create Car
        </Button>
      </Box>
    </Box>
  );
};

// "firm": "BMW",
// "mark": "X3",
// "year": 2014,
// "power": 245,
// "transmission": "full",
// "technicalStatus": "used",
// "price": 26000
