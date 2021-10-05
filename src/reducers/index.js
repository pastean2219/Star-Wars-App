import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import detailReducer from "./detailReducer";
import characterReducer from "./characterReducer";
import peopleReducer from "./peopleReducer";
import vehiclesReducer from "./vehiclesReducer";

const rootReduceer = combineReducers({
  films: filmsReducer,
  details: detailReducer,
  characters: characterReducer,
  people: peopleReducer,
  vehicles: vehiclesReducer,
});

export default rootReduceer;
