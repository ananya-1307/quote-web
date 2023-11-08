import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomQuote, getTags, addBookmark } from '../actions/quoteActions';
import { getQuotesByTag } from '../actions/quoteActions';
import './style.css'
const Homepage = () => {
  const dispatch = useDispatch();
  const { quote, tags, quotes, loading } = useSelector((state) => state.quotes);

  const [selectedTag, setSelectedTag] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    dispatch(getRandomQuote());
    dispatch(getTags());
  }, [dispatch]);

  useEffect(() => {
    if (selectedTag) {
      dispatch(getQuotesByTag(selectedTag)); // Use the new action
    }
  }, [selectedTag]);

  const generateRandomQuote = () => {
    dispatch(getRandomQuote());
  };

  const handleBookmarkClick = () => {
    dispatch(addBookmark(quote));
  };

  return (
    <div >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='home'>
          <div className='container'>
            <p className='content'>{quote.content}</p>
            <p className='author'>- {quote.author}</p>
            <i
              className="fas fa-bookmark book-mark" // Font Awesome bookmark icon
              onClick={handleBookmarkClick}
            ></i>
          </div>

          

            <select className='lst'
            onChange={(e) => setSelectedTag(e.target.value)}>
              <option className='opt' value=""></option>
              {tags.map((tag) => (
                <option className='opt' key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>

            <div>
              {quotes.map((quote) => (
                <div className='container' key={quote._id}>
                  <p className='content'>{quote.content}</p>
                  <p className='author'>- {quote.author}</p>
                </div>
              ))}
            </div>
          
          
            <button className='generate-btn' onClick={generateRandomQuote}>Generate Another Quote</button>
          
        </div>

      )}
    </div>
  );
};

export default Homepage;
