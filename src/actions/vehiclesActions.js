import axios from "axios";
import { vehiclesURL } from "../api";

//Action creator
export const loadVehicles = () => async (dispatch) => {
  //Fetch axios
  try {
    const loadVehicle = await axios.get(vehiclesURL());
    dispatch({
      type: "FETCH_VEHICLE",
      payload: {
        vehicles: loadVehicle.data.results,
      },
    });
  } catch (error) {
    console.log(error, error.response);
  }
};
