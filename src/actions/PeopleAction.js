import axios from "axios";
import { peopleURL } from "../api";

//Action creator
export const loadPeople = () => async (dispatch) => {
  //Fetch axios
  try {
    const loadPeople = await axios.get(peopleURL());
    dispatch({
      type: "FETCH_PEOPLE",
      payload: {
        people: loadPeople.data.results,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
