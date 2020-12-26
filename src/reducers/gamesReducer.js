const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_GAMES':
      return {
        ...state,
        popular: action.payload,
      };
    case 'FETCH_UPCOMING_GAMES':
      return {
        ...state,
        upcoming: action.payload,
      };
    case 'FETCH_NEW_GAMES':
      return {
        ...state,
        newGames: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
