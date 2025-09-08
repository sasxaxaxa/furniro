import './Inspiration.scss'
import Button from "../../components/ui/Button/Button.jsx";
import CarouselBig from "../../components/ui/CarouselBig.jsx";

const Inspiration = () => {
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
        <CarouselBig />
      </div>
    </section>
  )
}

export default Inspiration