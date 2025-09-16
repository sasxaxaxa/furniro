import './Browse.scss'
import BrowseCard from "../../components/cards/BrowseCard.jsx";

const browseItems = [
  {
    title: 'Dining',
    image: 'src/assets/images/browse-card/image-1.jpg',
    imagePosition: 'left',
  },
  {
    title: 'Living',
    image: 'src/assets/images/browse-card/image-2.jpg',
    imagePosition: 'right',
  },
  {
    title: 'Bedroom',
    image: 'src/assets/images/browse-card/image-3.jpg',
    imagePosition: 'left',
  },
]

const Browse = () => {
  return (
    <section className="browse">
      <div className="browse__inner">
        <h2 className="browse__title">
          Browse The Range
        </h2>
        <p className="browse__description">
          Discover versatile furniture designed to enhance every room in your home.
        </p>
        <ul className="browse__list">
          {browseItems.map((browseItem, index) => (
            <li key={index}>
              <BrowseCard
                title={browseItem.title}
                image={browseItem.image}
                imagePosition={browseItem.imagePosition}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Browse