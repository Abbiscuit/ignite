const initialState = {
  game: {},
  screen: {},
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAME_DETAIL':
      return {
        ...state,
        game: action.payload,
      };
    case 'FETCH_SCREENSHOT':
      return {
        ...state,
        screen: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
