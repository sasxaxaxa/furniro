import { useParams } from "react-router-dom";
import CARDS_DATA from '../../constants/CARDS_DATA.json';
import './SingleProduct.scss'

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
        <p className="product__info">
          {product.info}
        </p>

      </div>
    </section>
  );
};

export default SingleProduct;
