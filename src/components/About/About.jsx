import React from 'react'
import './About.css'
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';
import card3 from '../../img/card3.png';


function About() {
    return (
        <div className='About'>
            <div className="baground">
                <div className="me">
                    <div className="card1">
                        <img src={card1} alt="" />
                    </div>
                    <div className="text">
                        <h2>ABOUT ME</h2>
                        <p>Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                            By trusting me, you will get the maximum return for your project, save your nerves and time.
                            If you are interested in me .</p>
                    </div>
                    <div className="card2">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card3">
                        <img src={card3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
