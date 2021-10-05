//Base URL
const base_url = "https://swapi.dev/api/";
//Films
export const filmsURL = () => `${base_url}films`;
//Films details
export const filmDetailsURL = (film_id) => `${base_url}films/${film_id}`;
//People
export const peopleURL = () => `${base_url}people/`;
//Character
export const filmCharacterURL = (film_id) =>
  `${base_url}films/${film_id}/?characters/`;
//Search film
export const searchFilmURL = (film_name) =>
  `${base_url}films/?search=${film_name}`;
//Vehicles
export const vehiclesURL = () => `${base_url}vehicles/`;
