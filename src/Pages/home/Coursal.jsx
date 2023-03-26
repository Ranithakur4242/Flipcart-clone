import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PrevIcon=()=>{
  return(
    <div className='icon'>
      <ArrowBackIosNewIcon sx={{width:"2rem",height:"2rem"}}/>
    </div>
  )
}
const NextIcon=()=>{
  return(
    <div className='icon'>
      <ArrowForwardIosIcon sx={{width:"2rem",height:"2rem"}}/>
    </div>
  )
}

const Coursal = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel prevIcon={<PrevIcon/>} nextIcon={<NextIcon/>} className='carousal-main' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='car-image' src="assets/Home/c1.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='car-image' src="assets/Home/c2.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='car-image' src="assets/Home/c3.png" alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Coursal