import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookmark } from '../actions/quoteActions';

const Bookmarks = () => {
  const { bookmarks } = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  const handleRemoveBookmark = (quoteId) => {
    dispatch(removeBookmark(quoteId));
  };

  return (
    <div className='home'>
      
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map((quote) => (
            <li className='container' key={quote._id}>
              <p className='content'>{quote.content}</p>
              <p className='author'>- {quote.author}</p>
              <button className='remove' onClick={() => handleRemoveBookmark(quote._id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks yet.</p>
      )}
    </div>
  );
};

export default Bookmarks;
