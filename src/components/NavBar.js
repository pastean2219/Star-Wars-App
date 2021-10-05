import React, { useState } from "react";
//Bootstrap
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
//Router
import { Link } from "react-router-dom";
//Redux
import { fetchSearch } from "../actions/filmsAction";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={clearSearched}>
              Films
            </Nav.Link>
            <Nav.Link as={Link} to="/people/">
              People
            </Nav.Link>
            <Nav.Link as={Link} to="/vehicle">
              Vehicle
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
              value={textInput}
              onChange={inputHandler}
            />
            <Button
              variant="outline-success"
              type="submit"
              onClick={submitSearch}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
