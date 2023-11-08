import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Bookmarks from './components/Bookmarks';


const App = () => {
  return (
    <Router>
      <nav className='nav-bar'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/bookmarks" className='nav-link'>Bookmarks</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/bookmarks" element={<Bookmarks/>} />
      </Routes>
    </Router>
  );
};

export default App;
