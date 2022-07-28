import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { FindOrderForCar } from "./FindOrderForCar";

export interface Car {
  year: number;
  firm: string;
  price: number;
  id: number;
  mark: string;
  power: number;
  technicalStatus: string;
  transmission: string;
  updatedAt: string;
  createdAt: string;
}

export const AllCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  useEffect(() => {
    getAllCars();
  }, []);

  const enpoint = "http://localhost:5000";

  const getAllCars = async () => {
    const { data } = await axios.get(`${enpoint}/car`);

    console.log({ x: data });

    if (data) {
      setCars(data);
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
        <Button variant="contained" onClick={() => getAllCars()} style={{ marginTop: "2em", marginBottom: "2em" }}>
          Get all cars
        </Button>
        <Box display={"flex"} flexDirection="column">
          {cars
            ? cars.map((car) => {
                console.log({ car });
                return (
                  <Box key={car.id} padding="1em">
                    <Typography>Firm: {car.firm}</Typography>
                    <Typography>Mark: {car.mark}</Typography>
                    <Typography>Yaer: {car.year}</Typography>
                    <Typography>Power: {car.power}</Typography>
                    <Typography>Technical Status: {car.technicalStatus}</Typography>
                    <Typography>Transmission: {car.transmission}</Typography>
                    <Typography>Price: {car.price}</Typography>
                    <FindOrderForCar carId={car.id} />
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
    </Box>
  );
};
