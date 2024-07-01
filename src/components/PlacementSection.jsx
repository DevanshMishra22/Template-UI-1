import React from 'react';
import { Container, Carousel, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlacementSection.css';


const placements = [
  {
    name: 'Ranvijay Singh Rathore',
    course: 'SAP FICO',
    company: 'Microsoft',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/microsoft.png'
  },
  {
    name: 'Samar Singh',
    course: 'SAP FICO',
    company: 'Cognizant',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/cognizant.png'
  },
  {
    name: 'Adityanath Gupta',
    course: 'SAP FICO',
    company: 'IBM',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/ibm.png'
  },
  {
    name: 'Student Four',
    course: 'Digital Marketing',
    company: 'Google',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/google.png'
  },
  {
    name: 'Student Five',
    course: 'Data Science',
    company: 'Amazon',
    image: './Logos/review image.png',
    companyLogo: 'path/to/amazon.png'
  },
  {
    name: 'Student Six',
    course: 'Cyber Security',
    company: 'Facebook',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/facebook.png'
  },
  {
    name: 'Student Seven',
    course: 'AI',
    company: 'Tesla',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/tesla.png'
  },
  {
    name: 'Student Eight',
    course: 'IoT',
    company: 'Intel',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/intel.png'
  },
  {
    name: 'Student Nine',
    course: 'Blockchain',
    company: 'IBM',
    image: 'path/to/review image.png',
    companyLogo: 'path/to/ibm.png'
  }
];

const PlacementSection = () => {
  // Function to chunk the placements array into subarrays of length 3
  const chunkArray = (array, chunkSize) => {
    let results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const placementChunks = chunkArray(placements, 3);

  return (
    <Container className="placement-section text-center">
      <h2 className="section-title">OUR STUDENT PLACED AT</h2>
      <Carousel indicators={false} controls={true}>
        {placementChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {chunk.map((student, idx) => (
                <Col key={idx} md={4}>
                  <Card className="placement-card">
                    <Card.Img variant="top" src={student.image} className="student-image" />
                    <Card.Body>
                      <Card.Title>{student.name}</Card.Title>
                      <Card.Text>Trained on - {student.course}</Card.Text>
                      <div>Placed in</div>
                      <img src={student.companyLogo} alt={student.company} className="company-logo" />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          
        ))}
      </Carousel>
      
    </Container>
  );
};

export default PlacementSection;
