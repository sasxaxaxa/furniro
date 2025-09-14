import { useParams } from "react-router-dom";
import CARDS_DATA from '../../constants/CARDS_DATA.json';
import Rating from '../../components/elements/Rating';
import Button from "../../components/ui/Button/Button";
import './SingleProduct.scss';


const colors = {
  violet: "#816DFA",
  black: "#000000",
  yellow: "#B88E2F"
}


const SingleProduct = () => {
  const { id } = useParams();
  const product = CARDS_DATA.find(item => item.id === Number(id));

  if (!product) return <p>Продукт не найден</p>;

  return (
    <section className="product container">
      <div className="product__images">
        <div className="product__image-others">
          <ul className="product__image-others-list">
            {product.otherImages.map((item, index) => (
              <li
                className="product__image-others-container"
                key={index}
              >
                <img
                  className="product__image-other"
                  src={item}
                  alt=''
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="product__image-main">
          <img
            className="product__image"
            src={product.image}
            alt={product.title}
          />
        </div>
      </div>
      <div className="product__info">
        <h2 className="product__title">{product.title}</h2>
        <p className="product__price">
          Rp {product.price.toLocaleString('de-DE')}
        </p>
        <div className="product__rate">
          <Rating
            className="product__rate-count"
            rating={product.rate}
          />
          <p className="product__rate-review">
            {product.customerReview} Customer Review
          </p>
        </div>
        <p className="product__about">
          {product.info}
        </p>
        <div className="product__sizes">
          <h5 className="product__sizes-title">
            Size
          </h5>
          <ul className="product__sizes-list">
            {product.sizes.map((item, index) => (
              <li key={index}>
                <Button
                  label={item}
                  mode={index === 0 ? 'yellow' : 'banana'}
                  style="product-size"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="product__colors">
          <h5 className="product__colors-title">
            Color
          </h5>
          <ul className="product__colors-list">
            {product.colors.map((item, index) => (
              <li key={index}>
                <Button
                  style="product-color"
                  customStyle={{ backgroundColor: colors[item] }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="product__action-buttons">
            <Button 
              label="1"
              mode="transparent-border"
              style="product-action"
            />
            <Button
              label="Add To Cart"
              mode="transparent-border"
              style="product-action"
            />
            <Button 
              label="+ Compare"
              mode="transparent-border"
              style="product-action"
            />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
