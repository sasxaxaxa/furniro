import './BrowseCard.scss'
import classnames from "classnames";

const BrowseCard = (props) => {
  const {
    title,
    image,
    imagePosition,
  } = props

  return (
    <div className="browse-card">
      <div className="browse-card__image-container">
        <img
          className={classnames(
            'browse-card__image',
            `browse-card__image-${imagePosition}`,
          )}
          src={image}
          alt={title}
        />
      </div>
      <h3 className="browse-card__title">
        {title}
      </h3>
    </div>
  )
}

export default BrowseCard