import React from 'react';
import './home.css';
import Carousel from '../Carousel/Carousel';


import tifa from '../images/tifa.jpg';
import aerith from '../images/aerith.jpg';
import dd3 from '../images/dd3.jpg';

export default function Home() {

    const images = [tifa, aerith];
  return (
    <div className="py-5 bg-light d-flex flex-column align-items-center">
       
              <div className="container-sm px-4 d-flex">
                <div className="row">
                    <h2>Game Art</h2>
                    <Carousel images={images} />
                </div>
                <article>
                  <h2>Blog</h2>
                  <p>Dragon's Dogma</p>
                  <img src={dd3} alt='DD2 img' />
                  <p className='dd2p'>
                    Embark on an epic journey through the realms <br></br> of Middle-earth,
                    where every step echoes with <br></br> the pulse of adventure.
                  </p>
                </article>
            </div>            
    </div>
  )
}
