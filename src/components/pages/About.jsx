import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row className="my-4">
        {/* Image Column */}
        <Col md={4} className="mb-4 mb-md-0">
          <img src="public/imageplaceholder.jpg" alt="Missing Image" style={{ maxWidth: '100%' }} />
        </Col>
        
        {/* Text Column */}
        <Col md={8}>
          <div>
            Born and Raised in St. Paul Minnesota. 7 years law experiences.
          </div>
          <div>
            <p>Achievement and Acknowledgements</p>
            <ul>
              <li>Self-Proclaim Best Lawyer - 2000</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
