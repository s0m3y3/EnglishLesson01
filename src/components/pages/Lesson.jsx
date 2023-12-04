import React, {useState} from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import getColorSentences from '../../utils/colorSentences.js';
import getNumberSentences from '../../utils/numberSentences.js'
import getNumbers from '../../utils/numbers.js';

const Lesson = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  const colorSentences=getColorSentences();
  const numberSentences=getNumberSentences();
  const number=getNumbers();


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
        <Col lg={3} className={showSidebar ? 'd-lg-block' : 'd-none'}>
          <div className="bg-white p-3 position-fixed" style={{ height: '100vh', width: '200px' }}>
            <h2 className="mb-4">Lesson Chapters</h2>
            <ListGroup>
              {chapterList.map((chapter, index) => (
                <ListGroup.Item key={index}>
                  <a href={`#chapter-${index + 1}`}>{chapter}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>

        <Col lg={showSidebar ? 9 : 12} xs={12}>
          <div className="p-3">

            <section id="chapter-1">
              <h2>Chapter 1: Introduction: Basic Colors & Numbers</h2>
              Welcome to my lesson on basic color and numbers. Here, you will learn about the primary, secondary and neutral colors, as well as numbers 1-10. There will be a quiz at the end. 
            </section>

            <section id="chapter-2">
              <h2>Chapter 2: Basic Color 
              </h2>
              <img src="./colorwheel.png"></img>
              <div> Primary Colors</div>
                <li> red, blue, yellow </li>
              <div> Secondary Colors</div>
                <li> purple, green, orange </li>
              <div> Neutral Colors</div>
                <li> black, white, gray </li>
            </section>


            <section id="chapter-3">
              <h2>Color Sentences</h2>
              {colorSentences.map((color, index) => (
                <ListGroup key={index}>
                  <p index={`#color-${index + 1}`}>{color.name}
                    <ReactAudioPlayer
                    src={color.link}
                    onPlay	
                    controls
                    style={{maxHeight: '25px', maxWidth:"300px"}}
                    />
                  </p>  
                </ListGroup>
              ))}
            </section>

            <section id="chapter-4">
              <h2>Introduction to Number</h2>
              <div>1</div>
              <div>2</div>
              <div>...</div>
              <div>10</div>

              {numbers.map((number, index) => (
                <ListGroup key={index}>
                  <p index={`#color-${index + 1}`}>{number.name}
                    <ReactAudioPlayer
                    src={number.link}
                    onPlay	
                    controls
                    style={{maxHeight: '25px', maxWidth:"300px"}}
                    />
                  </p>   
                </ListGroup>
              ))}
            </section>


<ReactAudioPlayer
src="https://drive.google.com/uc?export=download&id=1v-uO7sllgagcHDALemEwzz7s1NMHkU-U"
onPlay	
controls
/>
{/* 
https://drive.google.com/file/d/1v-uO7sllgagcHDALemEwzz7s1NMHkU-U/view?usp=sharing
*/}


            <section id="chapter-5">
              <h2>Number Sentences</h2>
              {numberSentences.map((number, index) => (
                <ListGroup key={index}>
                  <p index={`#color-${index + 1}`}>{number.name}
                    <ReactAudioPlayer
                    src={number.link}
                    onPlay	
                    controls
                    style={{maxHeight: '25px', maxWidth:"300px"}}
                    />
                  </p>   
                </ListGroup>
              ))}
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
