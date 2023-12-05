import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
    return (

  <>
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Yee English Academy</Navbar.Brand>
      <Nav className="me-auto">

{/* Below is not ideal coding, but will keep for now. */}
        <Nav.Link onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </Nav.Link>

        <Nav.Link onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </Nav.Link>

        <Nav.Link onClick={() => handlePageChange('Lesson')} className={currentPage === 'Lesson' ? 'nav-link active' : 'nav-link'}>
          Lesson
        </Nav.Link>

      </Nav>
    </Container>
  </Navbar>
</>
  );
}
  export default NavTabs;
  
    //       <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          
  // <a className="navbar-brand ml-4 mr-5" href="#">Yee English Academy</a>

  // <div className="navbar-collapse " id="navbarSupportedContent">
  //   <ul className="navbar-nav mr-auto">
  //     <li className="nav-item active  ml-4 mr-4 ">
  //       <a
  //           href="#Home"
  //           onClick={() => handlePageChange('Home')}
  //           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
  //         >
  //           Home
  //       </a>
  //     </li>

      // <li className="nav-item active  ml-4 mr-4">
      // <a
      //       href="#lesson"
      //       onClick={() => handlePageChange('Lesson')}
      //       className={currentPage === 'Lesson' ? 'nav-link active' : 'nav-link'}
      //     >
      //       Lessons
      //     </a>
      // </li>
        
  //       <li className="nav-item ml-4 mr-4">
  //       </li>
  //     </ul>
  //   </div>
    
  // </nav>
