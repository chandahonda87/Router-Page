import React from 'react';
import './twitter.css';

import dd2 from '../images/dd2.jpg';
import FFR from '../images/FFR.jpg';
import songb from '../images/songb.jpg';
import GOW from '../images/GOW.jpg';

function Twitter() {
  return (
    <div>
        <div className="container-md px-4 d-flex ms-0">
            <div className="row align-items-center">
                <a href='https://twitter.com/Dacoolkid87' target='_blank' style={{textDecoration: 'none'}}>
                    <h3>@Dacoolkid87</h3>
                </a>
                <ul>
                    <li className="mb-2">Checkout my latest pics and videos</li>
                    <li className="mb-2">Follow and share if you like</li>
                </ul>
             </div>
                <div className='d-flex'>  
                    <img src={dd2} alt='gameImg' className='ddimg' />
                    <img src={FFR} alt='gameImg' className='FFimg' />
                    <img src={songb} alt='gameImg' className='sbimg' />
                    <img src={GOW} alt='gameImg' className='GOWimg' />
                </div>    
        </div>
    </div>
  )
}

export default Twitter