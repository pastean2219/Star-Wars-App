import React, { useEffect } from "react";
//Bootstrap
import { Container, Row } from "react-bootstrap";
//Router
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../actions/filmsAction";
//Components
import Film from "../components/Film";
import FilmDetail from "../components/FilmDetail";

const Home = () => {
  //get the current loaction
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch films
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);

  //get data back from state
  const { starWarsFilms, searched } = useSelector((state) => state.films);

  return (
    <>
      {pathId ? (
        <FilmDetail />
      ) : (
        <Container>
          {searched.length ? (
            <>
              <div className="title">
                <h1>Searched Films</h1>
              </div>
              <Row>
                {searched.map((film) => (
                  <Film
                    data={film.data}
                    title={film.title}
                    released={film.release_date}
                    director={film.director}
                    planets={film.planets}
                    id={film.episode_id}
                    key={film.episode_id}
                  />
                ))}
              </Row>
            </>
          ) : (
            ""
          )}
          <div className="title">
            <h1>Star Wars Films</h1>
          </div>
          <Row>
            {starWarsFilms.map((film) => (
              <Film
                data={film.data}
                title={film.title}
                released={film.release_date}
                director={film.director}
                planets={film.planets}
                id={film.episode_id}
                key={film.episode_id}
              />
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Home;
