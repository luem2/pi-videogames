import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import VideogameDetails from './pages/VideogameDetails/VideogameDetails';
import CreateVideogame from './pages/CreateVideogame/CreateVideogame';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/details/:id' element={<VideogameDetails />} />
          <Route path='/create' element={<CreateVideogame />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
