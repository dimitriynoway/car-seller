import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FindCarForOrder } from "./FindCarForOrder";

export interface Order {
  year: number;
  firm: string;
  highestPrice: number;
  id: number;
  lowestPrice: number;
  mark: string;
  power: number;
  technicalStatus: string;
  transmission: string;
  updatedAt: string;
  createdAt: string;
}

export const AllOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    getAllOrders();
  }, []);

  const enpoint = "http://localhost:5000";

  const getAllOrders = async () => {
    const { data } = await axios.get(`${enpoint}/buyer`);

    console.log({ x: data });

    if (data) {
      setOrders(data);
    }
  };
  return (
    <Box width={"20em"}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
        // sx={{
        //   "& > :not(style)": { m: 1, width: "25ch" },
        // }}
      >
        <Button variant="contained" onClick={() => getAllOrders()} style={{ marginTop: "2em", marginBottom: "2em" }}>
          Get all orders
        </Button>
        <Box display={"flex"} flexDirection="column">
          {orders
            ? orders.map((order) => {
                console.log({ order });
                return (
                  <Box key={order.id} padding="1em">
                    <Typography>Firm: {order.firm}</Typography>
                    <Typography>Mark: {order.mark}</Typography>
                    <Typography>Yaer: {order.year}</Typography>
                    <Typography>Power: {order.power}</Typography>
                    <Typography>Technical Status: {order.technicalStatus}</Typography>
                    <Typography>Transmission: {order.transmission}</Typography>
                    <Typography>Lowest Price: {order.lowestPrice}</Typography>
                    <Typography>Highest Price: {order.highestPrice}</Typography>
                    <FindCarForOrder orderId={order.id} />
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};
