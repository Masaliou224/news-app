import axios from "axios"

export const fetchNews = (category = 'general', query = '') => async dispatch => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: '6c14a83a4633432da8b90c38d171a379',
        country: 'us',
        category,
        q: query,
      },
    });
    dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data.articles });
  } catch (error) {
    dispatch({ type: 'FETCH_NEWS_ERROR', payload: error.message });
  }
};