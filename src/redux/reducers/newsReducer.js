const initialState = {
  articles: [],
  loading: true,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS': 
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case 'FETCH_NEWS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: 
      return state;
  }
};

export default newsReducer;