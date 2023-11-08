import React from 'react'
import './Footer.scss';
import maks from '../../img/maks.png';
import ship from '../../img/ship.png';
import next from '../../img/next.png';
import { data } from '../../assets/data';


function Footer() {
  return (
    <div className="footer">
      <div className="top" id='3'>
        <div className="container">
          <h2 className='h2'>PORTFOLIO</h2>
          <div className="disp">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
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
                        <a href="*" className='a'>More </a>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  data && data.map((e, i) => (
                    <div key={i} class="carousel-item">
                      <div className="middle">
                        <div className="inform">
                          <div className="left">
                            <div className="img">
                              <img src={maks} alt="" />
                            </div>
                          </div>
                          <div className="right">
                            <h4 className='land'>{e.title}</h4>
                            <p className='landp'>{e.text}</p>
                            <a href="*" className='a'>More  →</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
      </div>
      <div className="botton" id='4'>
        <div className="container">
          <div className="footermid">
            <ul>
              <li> <a href="#1" className='ahref'>Home</a></li>
              <li> <a href="#2" className='ahref'>About me</a></li>
              <li> <a href="#3" className='ahref'>Portfolio</a></li>
              <li> <a href="#4" className='ahref'>Contact</a></li>
            </ul>
            <ul>
              <li>Contact:</li>
              <li>Email: <a href="*" className='ahref'>test@gmail.com</a></li>
              <li>Instagram: <a href="*" className='ahref'>notitanic33</a></li>
              <li>Calls: <a href="*" className='ahref'> +998 (90) 123-45-67</a> </li>
            </ul>
            <ul>
              <li className='next'><img src={ship} alt="" /> <p>Notitanic</p> <a className='h' href="*"><img src={next} alt="" /></a></li>
              <li>Copyright © 2021, Notitanic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer