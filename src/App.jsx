import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import { Footer, Header } from './components';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Sponsors from './pages/Sponsors/Sponsors';

const Layout = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/events" element={<ComingSoon />} />
      <Route exact path="/news" element={<ComingSoon />} />
      <Route exact path="/contact" element={<ComingSoon />} />
      <Route exact path="/images" element={<ComingSoon />} />
      <Route exact path="/teams" element={<ComingSoon />} />
      <Route exact path="/sponsors" element={<Sponsors/>} />
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
      <Layout/>
      <Footer/>
      </div>

    </Router>

  );
}

export default App;
