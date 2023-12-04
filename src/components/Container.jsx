import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Lesson') {
      return <Lesson />;
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
