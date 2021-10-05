import axios from "axios";
import { filmsURL, searchFilmURL } from "../api";

//Action creator
export const loadFilms = () => async (dispatch) => {
  //Fetch axios
  try {
    const loadFilms = await axios.get(filmsURL());
    dispatch({
      type: "FETCH_FILMS",
      payload: {
        starWarsFilms: loadFilms.data.results,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
export const fetchSearch = (film_name) => async (dispatch) => {
  try {
    const searchFilms = await axios.get(searchFilmURL(film_name));
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchFilms.data.results,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
