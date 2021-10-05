import React, { useEffect } from "react";
//Bootstrap
import { Row, Container } from "react-bootstrap";
//Redux
import { loadPeople } from "../actions/PeopleAction";
import { useDispatch, useSelector } from "react-redux";
//components
import PeopleDetails from "../components/PeopleDetails";

const People = () => {
  //Fetch peoples
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPeople());
  }, [dispatch]);

  //get data back from state
  const { people } = useSelector((state) => state.people);

  return (
    <Container>
      <Row>
        {people.map((peop) => (
          <PeopleDetails
            height={peop.height}
            birth_year={peop.birth_year}
            gender={peop.gender}
            name={peop.name}
            key={peop.name}
            id={peop.name}
          />
        ))}
      </Row>
    </Container>
  );
};

export default People;
