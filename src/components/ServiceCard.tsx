import React from 'react';
import '../styles/Services.css'

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="service-card">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
