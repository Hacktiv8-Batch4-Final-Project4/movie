import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Detail from './components/pages/Detail';
import Error from './components/pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/detail/:query" element={<Detail />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
