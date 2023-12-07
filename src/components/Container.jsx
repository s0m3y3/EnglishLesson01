import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Footer from './pages/Footer';
import About from './pages/About';
import Quiz from './pages/Quiz';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Lesson') {
      return <Lesson />;
    }    
    if (currentPage === 'Quiz') {
      return <Quiz />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer></Footer>
    </div>
    
  );
}
