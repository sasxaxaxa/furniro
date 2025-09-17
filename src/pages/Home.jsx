import Header from '../components/layouts/Header/Header.jsx';
import Hero from "../sections/Hero/Hero.jsx";
import Browse from "../sections/Browse/Browse.jsx";
import OurProducts from "../sections/OurProducs/OurProducts.jsx";
import Inspiration from "../sections/Inspiration/Inspiration.jsx";
import Share from "../sections/Share/Share.jsx";
import Carousel from '../components/ui/Carousel.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Browse />
      <OurProducts />
      <Inspiration />
      {/* <Share /> */}
    </div>
  )
}

export default Home