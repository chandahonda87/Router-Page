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
                    As a PS5 gamer with a considerable backlog, I prefer to juggle between two games, allowing me the 
                    flexibility to switch between them seamlessly. Sundays are dedicated to investing focused time in 
                    either my 2nd or 3rd game on the list. The 3rd game holds a special place as I intentionally extend 
                    my playtime. Opting for a 40-hour plus game, I deliberately savor the experience, stretching it out 
                    over half a year. Immersing myself in the game's world for an extended period is a deliberate choice, 
                    enabling me to extract every bit of enjoyment. Once I complete a game, I typically don't revisit it, 
                    given the plethora of unexplored worlds waiting for me to discover.
                 
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
