import './App.css';
import { Navbar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { DestaquesPage } from './Components/DestaquesPage/DestaquesPage';
import { UserStorage } from './Context';
function App() {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destaques" element={<DestaquesPage />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
