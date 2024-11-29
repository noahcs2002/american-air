import React from 'react';
import '../styles/Home.css';
import one from '../images/1.jpeg';
import '../images/2.jpeg';
import '../images/3.jpeg';
import '../images/4.jpeg';
import '../images/5.jpeg';
import '../images/6.jpeg';
import '../images/7.jpeg';
import '../images/8.jpeg';

const Home: React.FC = () => {
  const services = [
    { id: 1, title: 'Air Conditioning Repair', description: 'We fix AC units quickly.' },
    { id: 2, title: 'Heating Installation', description: 'Keep your home warm in winter.' },
    { id: 3, title: 'Duct Cleaning', description: 'Improve air quality in your home.' },
  ];

  return (
    <main className="home-container">
      <section className="intro">
        <h1>American Air</h1>
        <h2>Service you can trust</h2>
        <p>
          We provide high-quality heating, ventilation, and air conditioning services to ensure your home
          or office is always comfortable. Whether it's repairs, installations, or maintenance, we’ve got you
          covered!
        </p>
      </section>

      <section className="gallery">
        <h2>Our Work</h2>
        <div className="image-grid">
          <div className="image-placeholder"><img src={one}></img></div>
          <div className="image-placeholder"><img></img></div>
          <div className="image-placeholder"><img></img></div>
          <div className="image-placeholder"><img></img></div>
        </div>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
