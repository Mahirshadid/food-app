import React from 'react';
import p1 from '../../assets/p-1.png';
import p2 from '../../assets/p-2.png';
import './header.css';

const Header = () => (
  <div className="fa__header section__padding" id="home">

    <div className="fa__header-content">
      <h3>Food App</h3>
      <h1 className="gradient__text">Why stay hungry when you can order from Bella Olonje</h1>
      <h4>Download the bella olonje&apos;s food app now on</h4>
      <div className="fa__header-content__input-center">
      <a href='https://play.google.com/'><button type="button" className='fa__header-content__input-button1'>Playstore</button></a>
      <a href='https://www.apple.com/app-store/'><button type="button" className='fa__header-content__input-button2'>AppStore</button></a>
      </div>
    <div className='fa__header-content__phoneimg'>
    <img id='phoneimg_p1' src={p1} />
    <img id='phoneimg_p2' src={p2} />
    </div>
    
      </div>

  </div>
);

export default Header;