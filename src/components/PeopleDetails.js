import React from "react";
//Bootstrap
import { Card } from "react-bootstrap";

const PeopleDetails = ({ name, height, birth_year, gender, id }) => {
  return (
    <>
      <Card style={{ width: "25rem" }} className="m-3 bg-dark" text="white">
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>

          <Card.Text>Height: {height}</Card.Text>
          <Card.Text>Birth year: {birth_year}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default PeopleDetails;
