import React, { useEffect } from 'react';
import '../styles/Home.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Home: React.FC = () => {

  useEffect(() => {
    console.log(new Date().getDay());
  }, [])

  const services = [
    { id: 1, title: 'Sales', description: 'We sell heat pumps, gas furnaces, mini-splits, p-tacs, air conditioners, wifi-capable and regular thermostats, filters. We specialize in the sale of Day & Night and Goodman units' }, 
    { id: 2, title: 'Installations', description: 'We install everyting we sell, from HVAC units to air filters and thermostats, we will make sure it gets set up the right way.' },
    { id: 3, title: 'Service', description: 'We preform preventative maintenance and take service calls for issues that arise with heat pumps, gas furnaces, mini-splits, p-tacs, air conditioners and air-conditioners' },
  ];

  const hours = [

    {id : -2, title: <LocalPhoneIcon/>, value: <a href='tel:+16064165980'>(606) 416 - 5980</a>},
    {id : -1, title: <MailOutlineIcon/>, value: <a href="mailto:americanaircompany@gmail.com">americanaircompany@gmail.com</a>},
    {id: 0, title: <LocationOnIcon/>, value: <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=283+hwy+790+bronston+ky+42518' rel="noreferrer">283 HWY 790, Bronston, KY 42518</a>},
    {},
    {},
    {id : 1, title : 'MONDAY', value: '9:00AM - 5:00PM'},
    {id : 2, title : 'TUESDAY', value: '9:00AM - 5:00PM'},
    {id : 3, title : 'WEDNESDAY', value: '9:00AM - 5:00PM'},
    {id : 4, title : 'THURSDAY', value: '9:00AM - 5:00PM'},
    {id : 5, title : 'FRIDAY', value: '9:00AM - 5:00PM'},
    {id : 6, title : 'SATURDAY', value: 'CLOSED'},
    {id : 7, title : 'SUNDAY', value: 'CLOSED'},
  ]

  return (
    <main className="home-container">
      <h1>American Air HVAC Services</h1>
      <section className="intro">
        <div className='service-card'>
          <h2>Service You Can Trust</h2>
          <p>
          We offer a wide range of HVAC services, including installation, maintenance, and repair for both <b>residential</b> and <b>commercial</b> units.
          </p>
          <p>
          From air conditioning to furnace repair, we have you covered. 
          </p>
        </div>
        <div className='service-card'>
          <h2>Our Promise</h2>
          <p>
          At American Air HVAC Services, we stand behind our work and offer a 100% satisfaction guarantee. 
          </p>
          <p>
          If you are not completely satisfied with our services, we will make it right.
          </p>
        </div>
      </section>

      <section className="gallery">
        <h2>Meet Our Team</h2>
        <div className="image-grid">

        <div className="image-placeholder">
          <img src="/images/corey.png" alt="Corey" />
          <p className="image-caption">Corey - Owner/Operator</p> {/* Title provided by Corey*/}
        </div>

        <div className="image-placeholder">
          <img src="/images/jackson.png" alt="Jaxson" />
          <p className="image-caption">Jaxson - Customer Service</p> {/* Title provided by Crystal*/}
        </div>

        <div className="image-placeholder">
          <img src="/images/isaiah.png" alt="Isaiah" />
          <p className="image-caption">Isaiah - HVAC Technician</p> {/* Title provided by Corey*/}
        </div>

        <div className="image-placeholder">
          <img src="/images/crystal.jpeg" alt="Crystal" style={{objectPosition:'-35px -25px'}} />
          <p className="image-caption">Crystal - Owner/Office Manager</p> {/* Title provided by Corey*/}
        </div>

        </div>
      </section>

      <section className="services-overview">
        <div className='left'>
          <h2>What we Offer</h2> 
          <div className="services-list">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
       
        <div className='right'>
          <div className='get-in-touch'>
              <h2>Get in Touch:</h2>
              {hours.map(hour => (
                <div className='hour-card' key={hour.id}> 
                  {hour.id === (new Date().getDay()) ? 
                  (
                  <div className='hour-item-card'>
                    <p> <b> {hour.title}</b> </p> 
                    <p className='value'> <b> {hour.value} </b> </p>
                  </div>
                  ) : (
                  <div className='hour-item-card'>
                    <p> {hour.title}</p> 
                    <p className='value'> {hour.value} </p>
                  </div>
                  )}
                </div>
              ))}
            </div>
        </div>

      </section>
    </main>
  );
};

export default Home;
