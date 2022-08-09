import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Home from './pages/Home/Home';
import VideogameDetails from './pages/VideogameDetails/VideogameDetails';
import CreateVideogame from './pages/CreateVideogame/CreateVideogame';
import NotFound from './pages/NotFound/NotFound';
import UpdateVideogame from './pages/UpdateVideogame/UpdateVideogame';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/create' element={<CreateVideogame />} />
          <Route path='/details/:id' element={<VideogameDetails />} />
          <Route path='/update/:id' element={<UpdateVideogame />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
