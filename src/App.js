import './App.css';
import { Navbar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { DestaquesPage } from './Components/DestaquesPage/DestaquesPage';
import { UserStorage } from './Context';
import { Privacidade } from './Components/Privacidade/Privacidade';
import { Anteriores } from './Components/Anteriores/Anteriores';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <UserStorage>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="anteriores" element={<Anteriores />} />
            <Route path="destaques" element={<DestaquesPage />} />
            <Route path="privacidade" element={<Privacidade />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
