import '../src/styles/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindArtist from './components/FindArtist';
import Landing from './components/Landing'
import ArtistPage from './components/ArtistPage'
import StudioPage from './components/StudioPage'
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/findbarber' element={<FindArtist />} />
      <Route path='/barberpage' element={<ArtistPage />} />
      <Route path='/shoppage' element={<StudioPage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
