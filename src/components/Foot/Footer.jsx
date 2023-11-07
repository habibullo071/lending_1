import React from 'react'
import './Footer.scss';
import maks from '../../img/maks.png';


function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="container">
          <h2 className='h2'>PORTFOLIO</h2>
          <div className="middle">
            <div className="inform">
              <div className="left">
                <div className="img">
                  <img src={maks} alt="" />
                </div>
              </div>
              <div className="right">
                <h4 className='land'>Landing Ice-cream</h4>
                <p className='landp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec ut orci eu elit consequat posuere ut sed elit. Nulla
                  et tristique felis. Morbi quis orci non purus blandit
                  fringilla. Etiam et mollis eros. Duis venenatis
                  vulputate lacus, non tristique eros placerat vel.
                  Nam nec magna lacus. Etiam euismod egestas mauris
                  nec mollis. Phasellus efficitur et ex vel condimentum.
                  Cras enim purus, tempor sed massa vel, accumsan
                  bibendum magna. Nullam hendrerit cursus purus,
                  sit amet viverra arcu gravida vel.</p>
                <p className='yellow'>More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="botton">
        <div className="container">
          <div className="footermid">
            <ul>
              <li>home</li>
              <li>home</li>
              <li>home</li>
              <li>home</li>
            </ul>
            <ul>
              <li>Inst: notitanic33</li>
              <li>Inst: notitanic33</li>
              <li>Inst: notitanic33</li>
              <li>Inst: notitanic33</li>
            </ul>
            <ul>
              <li>Copyright © 2021, Notitanic</li>
              <li>Copyright © 2021, Notitanic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer