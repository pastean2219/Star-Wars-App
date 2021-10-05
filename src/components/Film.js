import React from "react";
//Bootstrap
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { loadPeople } from "../actions/PeopleAction";
import { loadDetail } from "../actions/detailActions";
import { fetchCharacter } from "../actions/characterActions";
import { loadVehicles } from "../actions/vehiclesActions";
//

const Film = ({ title, released, director, id }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  const loadCharactersDetails = () => {
    dispatch(fetchCharacter(id));
  };
  const loadPeopleDetailHandler = () => {
    dispatch(loadPeople());
  };
  const loadVehicleHandler = () => {
    dispatch(loadVehicles());
  };

  return (
    <>
      <Card
        style={{ width: "25rem" }}
        className="m-3 bg-dark"
        text="white"
        onClick={loadDetailHandler}
      >
        <Card.Body onClick={loadPeopleDetailHandler}>
          <Link
            to={`/films/${id}`}
            style={{ textDecoration: "none", color: "#42ba96" }}
            onClick={loadVehicleHandler}
          >
            <Card.Title onClick={loadCharactersDetails}>{title}</Card.Title>
          </Link>
          <Card.Text>Release Date: {released}</Card.Text>
          <Card.Text>Director: {director}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Film;
