const initialState = {
  starWarsFilms: [],
  searched: [],
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FILMS":
      return { ...state, starWarsFilms: action.payload.starWarsFilms };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default filmsReducer;
