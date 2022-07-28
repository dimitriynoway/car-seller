import { Box, Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
export const FindCarForOrder = ({ orderId }: { orderId: number }) => {
  const endpoint = "http://localhost:5000";
  // const getCarsForOrder = async () => {
  //   const response = await axios.get(`${endpoint}/buyer/${orderId}/cars`);

  //   console.log({ response, data: response.data });
  // };

  return (
    <Box>
      <Box paddingTop={"2em"}>
        <Link to={`/order/${orderId}`}>
          <Button variant="contained">Get cars</Button>
        </Link>
      </Box>
    </Box>
  );
};

// buyer/:orderid/cars
// getCarsForBuyer
