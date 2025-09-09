import { useState } from "react";
import Button from "./Button/Button.jsx";
import image1 from "../../assets/images/slider/image1.jpg";
import image2 from "../../assets/images/slider/image2.jpg";
import image3 from "../../assets/images/slider/image3.jpg";
import "./CarouselBig.scss";
import CarouselItem from "./CarouselItem.jsx";

const images = [image1, image2, image3];

const CarouselBig = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {images.concat(images).map((image, index) => (
            <CarouselItem key={index} image={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
      </div>

      <Button
        className="carousel__control control next"
        icon="src/assets/icons/right-arrow-yellow.svg"
        mode="carousel-slide"
        onClick={nextSlide}
      />
    </div>
  );
};

export default CarouselBig
