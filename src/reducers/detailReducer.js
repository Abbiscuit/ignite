const initialState = {
  game: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAME_DETAIL':
      return {
        ...state,
        game: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
