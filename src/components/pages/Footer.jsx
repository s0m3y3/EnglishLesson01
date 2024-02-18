// import FacebookIcon from './facebook.png';
// import LinkedInIcon from './linkedin.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-3" style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0">&copy; 2023 Natalie Family Law</p>
          </div>
          <div className="col-md-4 text-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-white mr-3"
            >
              <img src='./facebook.png' alt="Facebook" style={{ maxWidth: '30px' }} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-white"
            >
              <img src='./linkedin.png' alt="LinkedIn" style={{ maxWidth: '30px' }} />
            </a>
          </div>
          <div className="col-md-4 text-center text-md-right">

          <a
              href="tel:1234567890"
              className="btn btn-link text-white"
              
            >
              <img src='./phone.png' alt="LinkedIn" style={{ maxWidth: '30px', marginRight: '10px'}} />
              123-456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
