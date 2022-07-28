import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "./AllCars";
import { Order } from "./AllOrders";

export const OrderFor = (props: any) => {
  let params = useParams();
  const endpoint = "http://localhost:5000";

  const [orders, setOrders] = useState<Order[]>();
  const [car, setCar] = useState<Car>();

  const getOrdersForCar = async () => {
    const { data } = await axios.get(`${endpoint}/car/${params.carId}/buyer`);

    console.log({ here: data });

    if (data) {
      setOrders(data);
    }
  };

  const getCar = async () => {
    const { data } = await axios.get(`${endpoint}/car/${params.carId}`);

    console.log({ data });

    if (data) {
      setCar(data);
    }
  };

  useEffect(() => {
    getCar();
    getOrdersForCar();
  }, []);

  return (
    <Box display={"flex"} justifyContent="space-around">
      <Box paddingTop={"2em"}>
        <Typography>Car:</Typography>
        <Box>
          <Box key={car?.id} padding="1em">
            <Typography>Firm: {car?.firm}</Typography>
            <Typography>Mark: {car?.mark}</Typography>
            <Typography>Yaer: {car?.year}</Typography>
            <Typography>Power: {car?.power}</Typography>
            <Typography>Technical Status: {car?.technicalStatus}</Typography>
            <Typography>Transmission: {car?.transmission}</Typography>
            <Typography>Price: {car?.price}</Typography>
          </Box>
        </Box>
      </Box>
      <Box paddingTop={"2em"}>
        <Typography>Orders for car:</Typography>
        <Box>
          {orders?.map((car) => {
            return (
              <Box key={car?.id} padding="1em">
                <Typography>Firm: {car?.firm}</Typography>
                <Typography>Mark: {car?.mark}</Typography>
                <Typography>Yaer: {car?.year}</Typography>
                <Typography>Power: {car?.power}</Typography>
                <Typography>Technical Status: {car?.technicalStatus}</Typography>
                <Typography>Transmission: {car?.transmission}</Typography>
                <Typography>Lowest Price: {car?.lowestPrice}</Typography>
                <Typography>Highest Price: {car?.highestPrice}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

// buyer/:orderid/cars
// getCarsForBuyer
