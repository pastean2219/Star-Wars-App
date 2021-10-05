const initialState = { characters: [] };

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTER":
      return {
        ...state,
        characters: action.payload.characters,
      };
    default:
      return { ...state };
  }
};

export default characterReducer;
