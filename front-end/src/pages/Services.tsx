import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    { id: 1, title: 'Air Conditioning Repair', description: 'We fix AC units quickly.' },
    { id: 2, title: 'Heating Installation', description: 'Keep your home warm in winter.' },
    { id: 3, title: 'Duct Cleaning', description: 'Improve air quality in your home.' },
  ];

  return (
    <main>
      <h1>Our Services</h1>
      <div>
        {services.map(service => (
          <ServiceCard key={service.id} title={service.title} description={service.description} />
        ))}
      </div>
    </main>
  );
};

export default Services;
