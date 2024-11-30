import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css'

const Services: React.FC = () => {
  const services = [
    { id: 1, title: 'Air Conditioning Repair', description: 'We fix AC units quickly. No matter the issue, one of our technicians is sure to be able to fix your system!' },
    { id: 2, title: 'Heating Installation', description: 'Keep your home warm in winter.' },
    { id: 3, title: 'Duct Cleaning', description: 'Improve air quality in your home.' },
  ];

  return (
    <main>
      <h1>Our Services</h1>
      <div className='service-card-container'>
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} />
        ))}
      </div>
    </main>
  );
};

export default Services;
