import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../../assets/images/slider/image1.jpg';
import image2 from '../../assets/images/slider/image2.jpg';
import image3 from '../../assets/images/slider/image3.jpg';
import image4 from '../../assets/images/slider/image4.jpg';
import image5 from '../../assets/images/slider/image5.jpg';
import image6 from '../../assets/images/slider/image6.jpg';

import './Carousel.scss'
import CarouselItem from './CarouselItem.jsx';

const Carousel = ({ sliderRef }) => {
  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  const slides = [
    <CarouselItem
      image={image1}
    />,
    <CarouselItem
      image={image2}
    />,
    <CarouselItem
      image={image3}
    />,
    <CarouselItem
      image={image4}
    />,
    <CarouselItem
      image={image5}
    />,
    <CarouselItem
      image={image6}
    />,
  ];

  return (

    <Slider
      style={{
        paddingInline: "10px",
        paddingBlock: "44px"

      }}
      {...settings} ref={sliderRef} className="container slider">
      {slides.map((slide, index) => (
        <div key={index} className="img-container">
          {slide}
        </div>
      ))}
    </Slider>


  )
}

export default Carousel;
