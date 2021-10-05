import React from "react";
//Bootstrap
import { Card, Container, Row } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";

const Characters = ({ name, id }) => {
  //Data from state
  const { characters } = useSelector((state) => state.characters);
  const { film } = useSelector((state) => state.details);
  return (
    <>
      <Container>
        <Row>
          <Card
            style={{ width: "20rem" }}
            key={film.name}
            className="m-3 bg-dark"
            text="white"
            id={film.episode_id}
          >
            <Card.Body>
              <Card.Text>Name: {characters.name}</Card.Text>
              <Card.Text>Height: {characters.height}</Card.Text>
              <Card.Text>Birth year: {characters.birth_year}</Card.Text>
              <Card.Text>Gender: {characters.gender}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default Characters;
