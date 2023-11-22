import '../style/Slider.scss';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export const SLider = () => {
const [activeIndex, setIndex] = useState(0);

  const slides = [
    { url: "https://plus.unsplash.com/premium_photo-1680127401733-1e24100f51f6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "beach" },
    { url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "boat" },
    { url: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "forest" },
  ];

  console.log(activeIndex);
  console.log(typeof activeIndex)

  const changeSlideBack = () => {
    if (activeIndex === 0){
      setIndex(slides.length - 1);
      return;
    }
    setIndex(activeIndex - 1);
  }

  const changeSlideForward = () => {
    if (activeIndex === slides.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(activeIndex + 1);
  }

  return (
    <div className="slider" style={{backgroundImage: `url(${slides[activeIndex].url})`}}>
      <IoIosArrowBack size={40} className='slider__arrow' onClick={() => changeSlideBack()}/>
      <IoIosArrowForward size={40} className='slider__arrow'onClick={() => changeSlideForward()} />
      <div className="slider__dots">{slides.map((slide, index) => (<div className='slider__dot' key={index} onClick={() => setIndex(index)}></div>))}</div>
    </div>
  )
};