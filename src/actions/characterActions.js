import axios from "axios";
//Api
import { filmCharacterURL } from "../api";

export const fetchCharacter = (id) => async (dispatch) => {
  try {
    const characterData = await axios.get(filmCharacterURL(id));

    dispatch({
      type: "GET_CHARACTER",
      payload: {
        characters: characterData.data,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
