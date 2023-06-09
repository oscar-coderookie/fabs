import './App.scss';
import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import { CookieBanner, FileUploader, Footer, Header, Register } from './components';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Sponsors from './pages/Sponsors/Sponsors';
import Teams from './pages/Teams/Teams';
import TeamDetail from './pages/TeamDetail/TeamDetail';
import { useState } from 'react';
import Login from './components/Login/Login';
import UserPage from './pages/UserPage/UserPage';
import CompetitionsPage from './pages/CompetitionsPage/CompetitionsPage';
import CircularsPage from './pages/CircularsPage/CircularsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NewsPage from './pages/NewsPage/NewsPage';
import RegulationPage from './pages/RegulationPage/RegulationPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import GalleryDetail from './pages/GalleryDetail/GalleryDetail';

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/events" element={<CompetitionsPage />} />
      <Route exact path="/news" element={<NewsPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/bulletin" element={<CircularsPage />} />
      <Route exact path="/regulation" element={<RegulationPage />} />
      <Route exact path="/gallery" element={<GalleryPage />} />
      <Route exact path="/gallery/:id" element={<GalleryDetail />} />
      <Route exact path="/teams" element={<Teams />} />
      <Route exact path="/teams/:id" element={<TeamDetail />} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/users/:id" element={<UserPage/>} />
      <Route exact path="/sponsors" element={<Sponsors/>} />
      <Route exact path="/upload" element={<FileUploader/>} />

    </Routes>
  )
}

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(!Cookies.get('cookiesAccepted'));

  const handleAcceptCookies = () => {
    Cookies.set('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  }

  return (
    <Router>
      <div className="App">
      {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
      <Header/>
      <Layout/>
      <Footer/>
      </div>

    </Router>

  );
}

export default App;
