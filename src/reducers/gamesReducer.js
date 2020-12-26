const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
