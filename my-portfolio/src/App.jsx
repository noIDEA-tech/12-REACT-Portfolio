import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-200">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-14">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
