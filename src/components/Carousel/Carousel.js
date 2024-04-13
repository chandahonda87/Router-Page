import React, { useState } from 'react';
import './carousel.css';


const Carousel = ({images}) => {
    // State to track the index of the currently displayed image
    const [index, setIndex] = useState(0);
   
    const handleClickPrev = () => {
    // If current index is 0, set index to the last image in the array
    // Otherwise, decrease index by 1   
        setIndex(prevIndex => (prevIndex === 0 ? images.length -1 : prevIndex -1));
    };

    const handleClickNext = () => {
    // If current index is the last image in the array, set index to 0
    // Otherwise, increase index by 1
        setIndex(prevIndex => (prevIndex === images.length -1 ? 0 : prevIndex +1))
    };


  return (
    <div>
        <button onClick={handleClickPrev} className="prev-btn">&#10094;</button>
        {/* Display the current image based on the index */}
        <img src={images[index]} alt='carousel' className='carousel-img' />
        <button onClick={handleClickNext} className="next-btn">&#10095;</button>
    </div>
  )
}

export default Carousel