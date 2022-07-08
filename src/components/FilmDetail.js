import React from "react";
//Bootstrap
import { Card, Container, Row } from "react-bootstrap";
//Redux
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FilmDetail = (id) => {
  //Data
  const { film } = useSelector((state) => state.details);
  const { people } = useSelector((state) => state.people);
  const { vehicles } = useSelector((state) => state.vehicles);

  return (
    <>
      <Container>
        <div className="title">
          <h1 className="m-4">{film.title}</h1>
        </div>
        <Row>
          <Card style={{ width: "100%" }} className="m-3 bg-dark" text="white">
            <Card.Body>
              <Card.Title>Title: {film.title}</Card.Title>
              <Card.Text>Release Date: {film.release_date}</Card.Text>
              <Card.Text>Opening Crawl: {film.opening_crawl}</Card.Text>
              <Card.Text>Director: {film.director}</Card.Text>
              <Card.Text>Producer: {film.producer}</Card.Text>

              <Card.Text>Episode id: {film.episode_id}</Card.Text>
              <Card.Title>
                <Link
                  to={"/people/"}
                  style={{ textDecoration: "none", color: "#42ba96" }}
                >
                  <h5>Characters: </h5>
                </Link>
                <div className="characters">
                  {people.map((p, i) => (
                    <p key={i}>{p.name}</p>
                  ))}
                </div>
              </Card.Title>
              <Card.Title>
                <Link
                  to={"/vehicle/"}
                  style={{ textDecoration: "none", color: "#42ba96" }}
                >
                  <h5>Vehicles: </h5>
                </Link>
                <div className="characters">
                  {vehicles.map((v, i) => (
                    <p key={i}>{v.name}</p>
                  ))}
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export default FilmDetail;
