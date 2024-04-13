import React from 'react';
import {Link} from 'react-router-dom';
import './about.css';

import aboutGot from '../images/aboutGOT.jpg';
import aboutPAN from '../images/aboutPAN.jpg';

export default function About() {
  return (
    <div className="py-5 bg-white">
        <div className="container-md px-4">
            <div className="row align-items-center">
                <div>
                    <img className='abGOT'
                    src={aboutGot}
                    alt="image"
                    />
                    <img className='abPAN'
                    src={aboutPAN}
                    alt='image'
                    />
                </div>
                <div className="col-md-7">
                    <h2 className="text-2xl text-gray-900 font-bold">
                    Accompany me as I travel through the realm of video games.  
                    </h2>
                    <p className="mt-4 text-gray-600">
                    My top PS5 games of all time include the captivating samurai saga of Ghost of Tsushima, the futuristic world of Cyberpunk 2077, the rich fantasy realms of Witcher 3, the nostalgic journey of FF7 Remake, and the exhilarating web-slinging adventure of Spider-Man. These are the most memorable PS5 games so far. Currently, I'm engrossed in FF7 Rebirth and Dragon’s Dogma. With so much of the gaming universe waiting to be explored, the backlog seems endless. It’s an incredible time to be a gamer.
                    </p>
                    <p className="mt-4 text-gray-600"> 
                    I create short videos of my gameplay for my own enjoyment. Although I don't do it all the time, 
                    I share these gaming moments on my YouTube Shorts. Feel free to check out my gaming content!
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}   
