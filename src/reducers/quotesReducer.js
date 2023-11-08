const initialState = {
    quote: {},
    tags: [],
    quotes: [], 
    bookmarks: [],
    loading: false,
  };
  
  const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_QUOTE':
        return { ...state, quote: action.payload, loading: false };
  
      case 'SET_TAGS':
        return { ...state, tags: action.payload };
  
      case 'ADD_BOOKMARK':
        return { ...state, bookmarks: [...state.bookmarks, action.payload] };
  
      case 'REMOVE_BOOKMARK':
        return {
          ...state,
          bookmarks: state.bookmarks.filter((quote) => quote._id !== action.payload),
        };

        case 'SET_QUOTES_BY_TAG':
          return { ...state, quotes: action.payload, loading: false }; 
  
      case 'TOGGLE_LOADING':
        return { ...state, loading: !state.loading };
  
      default:
        return state;
    }
  };
  
  export default quotesReducer;
  