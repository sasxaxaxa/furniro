import './CarouselItem.scss';

const CarouselItem = ({ image }) => {
  return (
    <div className="carousel-item">
      <img src={image} alt="" />
      <div className="carousel-item__info">
        <p className="carousel-item__description">01 - Bed Room</p>
        <h3 className="carousel-item__title">Inner Peace</h3>
      </div>
    </div>
  );
};

export default CarouselItem;
