import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
    return (

  <>
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Natalie Family Law</Navbar.Brand>
      <Nav className="me-auto">

{/* Below is not ideal coding, but will keep for now. */}
        <Nav.Link onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </Nav.Link>

        <Nav.Link onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </Nav.Link>
        
        <Nav.Link onClick={() => handlePageChange('Practice')} className={currentPage === 'Practice' ? 'nav-link active' : 'nav-link'}>
        Practice
        </Nav.Link>

        <Nav.Link onClick={() => handlePageChange('Contact')} className={currentPage === 'Contacts' ? 'nav-link active' : 'nav-link'}>
        Contacts
        </Nav.Link>

      </Nav>
    </Container>
  </Navbar>
</>
  );
}
  export default NavTabs;