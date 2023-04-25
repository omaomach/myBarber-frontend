import '../src/styles/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindArtist from './components/FindArtist';
import Landing from './components/Landing'


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/findbarber' element={<FindArtist />} />
      <Route path='/explore' element={<FindArtist />} />
      </Routes>
    </Router>
  );
}

export default App;
