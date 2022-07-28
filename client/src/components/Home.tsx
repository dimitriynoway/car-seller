import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box display={"flex"} flexDirection="row" padding={"3em"} justifyContent="space-around">
      <Box>
        <Link to="/orders">
          <Button variant="contained">Orders</Button>
        </Link>
      </Box>
      <Box>
        <Link to="/cars">
          <Button variant="contained">Cars</Button>
        </Link>
      </Box>
    </Box>
  );
};
