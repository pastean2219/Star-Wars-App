import axios from "axios";
import { filmDetailsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  try {
    const detailData = await axios.get(filmDetailsURL(id));

    dispatch({
      type: "GET_DETAIL",
      payload: {
        film: detailData.data,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
