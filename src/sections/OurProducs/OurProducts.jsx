import CARDS_DATA from '../../constants/CARDS_DATA.json';
import ProductCard from "../../components/cards/ProductCard";
import './OurProducts.scss'
import Button from "../../components/ui/Button/Button.jsx";

const OurProducts = () => {
  return (
    <section className="our-products container">
      <div className="our-products__inner">
        <h2 className="our-products__title">Our Products</h2>
      </div>
      <ul className="our-products__list">
        {CARDS_DATA.map((item, index) => (
          <li key={index}>
            <ProductCard
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              oldPrice={item.oldPrice}
              image={item.image}
              imagePosition='top'
              specialOffer={item.specialOffer}
            />
          </li>
        ))}
      </ul>
      <Button
        label="Show More"
        mode="white-yellow"
        style="our-products"
      />
    </section>
  )
}

export default OurProducts