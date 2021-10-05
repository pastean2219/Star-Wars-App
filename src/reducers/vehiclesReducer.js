const initState = {
  vehicles: [],
};

const vehiclesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_VEHICLE":
      return { ...state, vehicles: action.payload.vehicles };
    default:
      return { ...state };
  }
};

export default vehiclesReducer;
