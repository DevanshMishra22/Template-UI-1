import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const clients = [
  { name: 'Amdocs', logo: 'src/Logos/amdocs.png' },
  { name: 'Google', logo: 'src/Logos/google.png' },
  { name: 'TCS', logo: 'src/Logos/tcs.png' },
  { name: 'Zensar', logo: 'src/Logos/zensar.png' },
  { name: 'IBM', logo: 'src/Logos/ibm.png' },
  { name: 'Amazon', logo: 'src/Logos/amazon.png' },
  { name: 'Microsoft', logo: 'src/Logos/microsoft.png' },
  { name: 'Apple', logo: 'src/Logos/microsoft.png' },
  { name: 'Facebook', logo: 'src/Logos/meta.png' },
  { name: 'Twitter', logo: 'src/Logos/microsoft.png' },
  { name: 'LinkedIn', logo: 'src/Logos/microsoft.png' },
  { name: 'Salesforce', logo: 'src/Logos/microsoft.png' },
  { name: 'Oracle', logo: 'src/Logos/microsoft.png' },
  { name: 'SAP', logo: 'src/Logos/grc.png' },
  { name: 'Adobe', logo: 'src/Logos/microsoft.png' }
];

const OurClients = () => {
  return (
    <Container fluid className="our-clients-section text-center">
      <h2 className="section-title">Our Clients</h2>
      <Carousel className="clients-carousel" indicators={false} interval={3000}>
        {clients.map((client, index) => (
          <Carousel.Item key={index} className="client-slide">
            <img
              src={client.logo}
              alt={client.name}
              className="client-logo"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OurClients;
