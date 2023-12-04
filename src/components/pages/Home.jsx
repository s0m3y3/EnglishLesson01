import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src="./blackboard.jpg" className="img-fluid" alt="Blackboard" />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3vw', color:'white'}}>Welcome to Class!</h1>
              <h2 style={{ fontSize: '1.5vw', color:'white' }}>"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss</h2>
            </div>
          </div>
      </Row>
    </Container>
  );
}
