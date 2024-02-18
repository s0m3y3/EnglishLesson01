import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
          <div style={{ position: 'relative', textAlign: 'center' }}>

            <img src="./blackboard.jpg" className="img-fluid" alt="Blackboard" />
            <div style={{ position: 'absolute', top: '50=%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            </div>

          </div>
      </Row>
    </Container>
  );
}
