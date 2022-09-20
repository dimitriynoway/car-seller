import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "./AllCars";
import { Order } from "./AllOrders";

export const CarFor = (props: any) => {
  let params = useParams();
  const endpoint = "http://localhost:5000";

  const [order, setOrder] = useState<Order>();
  const [cars, setCars] = useState<Car[]>();

  const getOrder = async () => {
    const { data } = await axios.get(`${endpoint}/buyer/${params.orderId}`);

    if (data) {
      setOrder(data);
    }
  };

  const getCarsForOrder = async () => {
    const { data } = await axios.get(`${endpoint}/buyer/${params.orderId}/cars`);

    console.log({ data });

    if (data) {
      setCars(data);
    }
  };

  useEffect(() => {
    getOrder();
    getCarsForOrder();
  }, []);

  return (
    <Box display={"flex"} justifyContent="space-around">
      <Box paddingTop={"2em"}>
        <Typography>Order:</Typography>
        <Box>
          <Box key={order?.id} padding="1em">
            <Typography>Firm: {order?.firm}</Typography>
            <Typography>Mark: {order?.mark}</Typography>
            <Typography>Yaer: {order?.year}</Typography>
            <Typography>Power: {order?.power}</Typography>
            <Typography>Technical Status: {order?.technicalStatus}</Typography>
            <Typography>Transmission: {order?.transmission}</Typography>
            <Typography>Lowest Price: {order?.lowestPrice}</Typography>
            <Typography>Highest Price: {order?.highestPrice}</Typography>
          </Box>
        </Box>
      </Box>
      <Box paddingTop={"2em"}>
        <Typography>Cars for order:</Typography>
        <Box>
          {cars?.map((car) => {
            return (
              <Box key={car?.id} padding="1em">
                <Typography>Firm: {car?.firm}</Typography>
                <Typography>Mark: {car?.mark}</Typography>
                <Typography>Yaer: {car?.year}</Typography>
                <Typography>Power: {car?.power}</Typography>
                <Typography>Technical Status: {car?.technicalStatus}</Typography>
                <Typography>Transmission: {car?.transmission}</Typography>
                <Typography>Price: {car?.price}</Typography>
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
