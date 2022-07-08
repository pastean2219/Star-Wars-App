import React from "react";
//Bootstrap
import { Card, Container, Row } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";

const Characters = () => {
  //Data from state
  const { characters } = useSelector((state) => state.characters);
  return (
    <>
      <Container>
        <Row>
          <Card
            style={{ width: "20rem" }}
            key={characters.name}
            className="m-3 bg-dark"
            text="white"
          >
            <Card.Body>
              <Card.Text>
                Name:
                {characters.name}
              </Card.Text>
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
