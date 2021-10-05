const initState = {
  people: [],
};

const peopleReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return { ...state, people: action.payload.people };
    default:
      return { ...state };
  }
};

export default peopleReducer;
