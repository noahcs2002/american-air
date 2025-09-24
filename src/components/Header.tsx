import React from 'react';
import '../styles/Header.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Header: React.FC = () => {
  return (
    <header className='navbar'>
          <div className='nav-left'>
            <img src='../images/logo_trans.png' alt="American Air Logo">
            </img>
          </div>
          <div className='nav-right'>
            <ul>
              <li> <LocalPhoneIcon/> <a href='tel:+16064165980'>(606) 416 - 5980</a></li>
              <li> <MailOutlineIcon/> <a href="mailto:americanaircompany@gmail.com">americanaircompany@gmail.com</a></li>
              <li> <LocationOnIcon/> <a target='_blank' href='https://www.google.com/maps/search/?api=1&query=283+hwy+790+bronston+ky+42518' rel="noreferrer">Somerset and the surrounding area</a></li>
            </ul>
          </div>
    </header>
  );
};

export default Header;
