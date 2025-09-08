import Button from "../../components/ui/Button/Button.jsx";
import './Hero.scss'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__title-mini">
          New Arrival
        </p>
        <h2 className="hero__title">
          Discover Our<br/>New Collection
        </h2>
        <p className="hero__description">
          Explore modern designs crafted for comfort and style, bringing timeless elegance into every corner of your home.
        </p>
        <Button
          className="hero__button"
          label="Buy now"
          mode="yellow"
          style="hero"
        />
      </div>
    </section>
  )

}

export default Hero