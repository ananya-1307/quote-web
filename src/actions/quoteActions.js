import axios from 'axios';

// Action creators

export const getRandomQuote = () => {
  return async (dispatch) => {
    dispatch({ type: 'TOGGLE_LOADING' });

    try {
      const response = await axios.get('https://api.quotable.io/random');
      const quote = response.data;
      dispatch({ type: 'SET_QUOTE', payload: quote });
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
};

export const getTags = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.quotable.io/tags');
      const tags = response.data.map((tag) => tag.name);
      dispatch({ type: 'SET_TAGS', payload: tags });
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };
};

export const addBookmark = (quote) => {
  return { type: 'ADD_BOOKMARK', payload: quote };
};

export const removeBookmark = (quoteId) => {
  return { type: 'REMOVE_BOOKMARK', payload: quoteId };
};

export const getQuotesByTag = (tag) => {
  return async (dispatch) => {
    dispatch({ type: 'TOGGLE_LOADING' });

    try {
      const response = await axios.get(`https://api.quotable.io/quotes?tags=${tag}`);
      const quotes = response.data.results;
      dispatch({ type: 'SET_QUOTES_BY_TAG', payload: quotes });
    } catch (error) {
      console.error('Error fetching quotes by tag:', error);
    }
  };
};

