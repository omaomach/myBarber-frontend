import '../src/styles/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindArtist from './components/FindArtist';
import Landing from './components/Landing'
import ArtistPage from './components/ArtistPage'
import StudioPage from './components/StudioPage'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/findbarber' element={<FindArtist />} />
      <Route path='/artistpage' element={<ArtistPage />} />
      <Route path='/studiopage' element={<StudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
