import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateOrderField } from "./components/CreateOrderField";
import { AllOrders } from "./components/AllOrders";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { CreateCarField } from "./components/CreateCarField";
import { AllCars } from "./components/AllCars";
import { CarFor } from "./components/CarFor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/orders"
          element={
            <Box display={"flex"}>
              <CreateOrderField />
              <AllOrders />
            </Box>
          }
        />
        <Route
          path="/cars"
          element={
            <Box display={"flex"}>
              <CreateCarField />
              <AllCars />
            </Box>
          }
        />
        <Route path="/order/:orderId" element={<CarFor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
