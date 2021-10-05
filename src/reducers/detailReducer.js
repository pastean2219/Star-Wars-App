const initialState = { film: {} };

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        film: action.payload.film,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
