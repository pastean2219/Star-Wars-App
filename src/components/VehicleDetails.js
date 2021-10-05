import React from "react";
//Bootstrap
import { Card } from "react-bootstrap";

const VehicleDetails = ({
  max_atmosphering_speed,
  manufacturer,
  model,
  name,
}) => {
  return (
    <>
      <Card
        style={{ width: "25rem" }}
        className="m-3 bg-dark"
        text="white"
        key={name}
      >
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>

          <Card.Text>Model: {model}</Card.Text>
          <Card.Text>Manufacturer: {manufacturer}</Card.Text>
          <Card.Text>
            Max atmosphering speed: {max_atmosphering_speed}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default VehicleDetails;
