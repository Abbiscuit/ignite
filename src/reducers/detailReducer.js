const initialState = {
  game: {
    platforms: [],
  },
  screen: {
    results: [],
  },
  isLoading: false,
  error: '',
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_GAME_DETAIL':
      return {
        ...state,
        game: action.payload,
        isLoading: false,
      };
    case 'FETCH_SCREENSHOT':
      return {
        ...state,
        screen: action.payload,
        isLoading: false,
      };
    case 'LOADING_FAIL':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
