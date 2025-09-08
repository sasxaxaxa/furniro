import './ProductCard.scss'
import classnames from "classnames";

const ProductCard = (props) => {
  const {
    title,
    description,
    price,
    oldPrice,
    specialOffer,
    image,
    imagePosition,
  } = props

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img
          className={classnames(
            'product-card__image',
            `product-card__image-${imagePosition}`,
          )}
          src={image}
          alt={title}
        />
      </div>
      <div className="product-card__info">
        <h3 className="product-card__title">
          {title}
        </h3>
        <p className="product-card__description">
          {description}
        </p>
        <div className="product-card__price-container">
          <p className="product-card__price">
            Rp {price.toLocaleString('de-DE')}
          </p>
          {oldPrice && (
            <p className="product-card__price-old">
              Rp {oldPrice.toLocaleString('de-DE')}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard