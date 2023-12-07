import React, {useState} from 'react';
import { Container, Row, Col, ListGroup, Button, Card } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import getColorSentences from '../../utils/colorSentences.js';
import getNumberSentences from '../../utils/numberSentences.js'
import getNumbers from '../../utils/numbers.js';
import getColors from '../../utils/colors.js';
const Lesson = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  const colorSentences=getColorSentences();
  const numberSentences=getNumberSentences();
  const numbers=getNumbers();
  const colors = getColors();

  const toggleSidebar = ()=>{
    setShowSidebar(!showSidebar);
  }

  const toggleAudio = () => {
    const audioElement = document.getElementById('audio-player');
    if (audioElement.paused) {
      audioElement.play();
      setAudioPlaying(true);
    } else {
      audioElement.pause();
      setAudioPlaying(false);
    }
  };

  const chapterList = [
    'Chapter 1: Introduction: Basic Colors & Numbers',
    'Chapter 2: Introduction to Color',
    'Chapter 3: Color Sentences',
    'Chapter 4: Introduction to Number',
    'Chapter 5: Number Sentences',
    'Chapter 6: Vocabulary',
    'Chapter 7: Quiz'
  ];

  return (
<Container fluid>
  <Row>
{/* Sidebar */}
    <Col lg={3} className={showSidebar ? 'd-lg-block' : 'd-none'}>
      <div className="bg-white p-3 position-fixed" style={{ height: '100vh', width: '200px' }}>
        <h2 className="mb-4">Lesson Chapters</h2>
        <button> Easy </button>
        <ListGroup>
          {chapterList.map((chapter, index) => (
            <ListGroup.Item key={index}>
              <a href={`#chapter-${index + 1}`}>{chapter}</a>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Col>

{/* Begins Chapter1 */}
        <Col lg={showSidebar ? 9 : 12} xs={12}>
          <div className="p-3">

            <section id="chapter-1">
              <h2>Chapter 1: Introduction: Basic Colors & Numbers</h2>
              Welcome to my lesson on basic color and numbers. Here, you will learn about the primary, secondary and neutral colors, as well as numbers 1-10. There will be a quiz at the end. 
            </section>

            <section id="chapter-2">
              <h2>Chapter 2: Basic Color </h2>
              <img src="./colorwheel.png"></img>
              <div> Primary Colors</div>
                <Container fluid>
                  <Row>
                    {colors.map((color, index) => (
                    <Card style={{ width: '18rem', maxWidth: '325px'}}>
                      <Card.Body style={{ alignItems: 'center', justifyContent: 'center'}}>
                        <Card.Title>{color.name}</Card.Title>
                        <Card.Img src={color.photo} style={{ maxHeight: '150px', maxWidth: '150px',  alignItems: 'center', justifyContent: 'center'}}></Card.Img>
                        <ReactAudioPlayer
                          src={color.link}
                          onPlay
                          controls
                          style={{ maxHeight: '25px', maxWidth: '250px' }}
                        />
                      </Card.Body>
                    </Card>
                    ))}
                  </Row>
                </Container>
            </section>


            <section id="chapter-3">
              <h2>Color Sentences</h2>
              <Container fluid>
                <Row>
                  {colorSentences.map((color, index) => (
                    <Card style={{ width: '18rem', maxWidth: '325px'}}>
                      <Card.Body>
                        <Card.Title>{color.name}</Card.Title>
                        <Card.Img variant="top" src={color.photo} style={{ maxHeight: '150px', maxWidth: '150px', justifyContent: 'center'}} />
                        <ReactAudioPlayer
                            src={color.link}
                            onPlay
                            controls
                            style={{ maxHeight: '25px', maxWidth: '250px' }}
                          />
                      </Card.Body>
                    </Card>
                  ))}
                </Row>
              </Container>
            </section>

            <section id="chapter-4">
              <h2>Introduction to Number</h2>
                <Container fluid>
                  <Row>
                    {numbers.map((number, index) => (
                      <Card style={{ width: '18rem', maxWidth: '325px'}}>
                        <Card.Body>
                          <Card.Title style={{textAlign: 'center', fontSize:'30px'}}>{number.number}</Card.Title>
                          <Card.Text variant="top" style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'Bold'}}>
                            {number.name}
                          </Card.Text>
                          <ReactAudioPlayer
                            src={number.link}
                            onPlay
                            controls
                            style={{ maxHeight: '25px', maxWidth: '250px', justifyContent:'center' }}
                          />
                        </Card.Body>
                      </Card>
                    ))}
                  </Row>
                </Container>
            </section>

            <section id="chapter-5">
              <h2>Number Sentences</h2>
                <Container fluid>
                  <Row>
                    {numberSentences.map((number, index) => (
                      <Card style={{ width: '18rem', maxWidth: '325px'}}>
                        <Card.Body>
                          <Card.Title>{number.name}</Card.Title>
                          <Card.Img variant="top" src={number.photo} style={{ maxHeight: '150px', maxWidth: '150px', justifyContent: 'center'}} />
                          <ReactAudioPlayer
                              src={number.link}
                              onPlay
                              controls
                              style={{ maxHeight: '25px', maxWidth: '250px' }}
                            />
                        </Card.Body>
                      </Card>
                    ))}
                  </Row>
                </Container>
            </section>
            
            <section id="chapter-6">
              <h2>Vocabulary</h2>
              <div>
                Student
                Teacher
                Book
                Chair
                Pencil
                Bird
                Cat
                Cloud
                Toy
                Jean/Jeans
                Sun
                Lime
                grape
                Apple
                Banana
              </div>
            </section>

            <section id="chapter-7">
              <h2>Quiz</h2>
              <div>
                insert Quiz
              </div>
            </section>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Lesson;

//todo:
//create function to map. OR multiple pages for each chapter. 
//make sidebar responsive
//