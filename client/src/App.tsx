import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import VideogameDetails from './pages/VideogameDetails/VideogameDetails'
import CreateVideogame from './pages/CreateVideogame/CreateVideogame'
import UpdateVideogame from './pages/UpdateVideogame/UpdateVideogame'

function App(): JSX.Element {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Landing />} path='/' />
                    <Route element={<Home />} path='/home' />
                    <Route element={<CreateVideogame />} path='/create' />
                    <Route element={<VideogameDetails />} path='/details/:id' />
                    <Route element={<UpdateVideogame />} path='/update/:id' />
                    <Route element={<Navigate to='/home' />} path='*' />
                </Routes>
            </Router>
        </>
    )
}

export default App
