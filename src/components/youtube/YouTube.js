import React from 'react'
import './youtube.css';

export default function YouTube() {
  return (
    <div className="py-5 bg-white">
        <div className="container-md px-4">
           <ul className='d-flex'>
            <li>
                <h2>
                    <a href='#' target='_blank' style={{textDecoration: 'none'}} className='CH' >C_HondaGaming</a>
                </h2>
            </li>
            <li>
                <div className="video-container">
                <h2>Music Video</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/FZuPAMy3Ki8"
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                >
                </iframe>
                </div>
            </li>
                <div style={{ textAlign: 'center' }}>
                <ul style={{ listStyle: 'none', padding: 0 }} className="list-items">
                    <li><a href='#'>Gameplay</a></li>
                    <li><a href='#'>Cyberpunk</a></li>
                    <li><a href='#'>Ghost of Tsushima</a></li>
                    <li><a href='#'>Music Videos</a></li>
                </ul>
                </div>
           </ul>
        </div>
    </div>
  )
}
