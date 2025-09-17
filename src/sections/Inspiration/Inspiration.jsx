import './Inspiration.scss'
import Button from "../../components/ui/Button/Button.jsx";
import Carousel from '../../components/ui/Carousel.jsx';
import { useRef } from 'react';

const buttonIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
</svg>


const Inspiration = () => {

 const sliderRef = useRef(null);

  return (
    <section className="inspiration">
      <div className="inspiration__info">
        <h2 className="inspiration__title">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="inspiration__description">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </p>
        <Button
          label="Explore More"
          mode="yellow"
          style="inspiration"
        />
      </div>
      <div className="inspiration__second-column">
        <Carousel sliderRef={sliderRef} />

        <Button
          icon={buttonIcon}
          onClick={() => sliderRef.current.slickNext()}
          className="inspiration-carousel-button"
        />
      </div>
    </section>
  )
}

export default Inspiration