import React, { useEffect } from "react";
//Bootstrap
import { Row, Container } from "react-bootstrap";
//Redux
import { loadVehicles } from "../actions/vehiclesActions";
import { useDispatch, useSelector } from "react-redux";
//Componets
import VehicleDetails from "../components/VehicleDetails";

const Vehicles = () => {
  //Fetch vehicles
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadVehicles());
  }, [dispatch]);
  //get data back from state
  const { vehicles } = useSelector((state) => state.vehicles);

  return (
    <Container>
      <Row>
        {vehicles.map((vehicle) => (
          <VehicleDetails
            key={vehicle.name}
            id={vehicle.name}
            name={vehicle.name}
            model={vehicle.model}
            manufacturer={vehicle.manufacturer}
            max_atmosphering_speed={vehicle.max_atmosphering_speed}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Vehicles;
