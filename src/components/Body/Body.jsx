import React from 'react'
import './Body.scss'

import icon1 from '../../img/icon-1.png';
import icon2 from '../../img/icon-2.png';
import icon3 from '../../img/icon-3.png';
import icon4 from '../../img/icon-4.png';
import icon5 from '../../img/icon-5.png';
import icon6 from '../../img/icon-6.png';
import icon7 from '../../img/icon-7.png';

function Body() {
  return (
    <div className='body' id='2'>
        <div className="container">
            <div className="body__top">
                <div className="icons">
                  <img src={icon1} alt="i-1" />
                  <p>Product Design</p>
                  <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, obcaecati!</b>
                </div>
                <div className="icons">
                  <img src={icon2} alt="i-2" />
                  <p>UX/UI Design</p>
                </div>
                <div className="icons">
                  <img src={icon3} alt="i-3" />
                  <p>Icon Design</p>
                </div>
                <div className="icons">
                  <img src={icon4} alt="i-4" />
                  <p>Logo Design</p>
                </div>
                <div className="icons">
                  <img src={icon5} alt="i-5" />
                  <p>Backend</p>
                </div>
                <div className="icons">
                  <img src={icon6} alt="i-6" />
                  <p>Frontend</p>
                </div>
                <div className="icons">
                  <img src={icon7} alt="i-7" />
                  <p>Motion</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body