import Navbar from './components/Navbar/Navbar.jsx';
import Landing from './components/Landing/Landing.jsx';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
