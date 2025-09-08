import Header from '../components/layouts/Header/Header.jsx';
import Hero from "../sections/Hero/Hero.jsx";
import Browse from "../sections/Browse/Browse.jsx";
import OurProducts from "../sections/OurProducs/OurProducts.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <OurProducts />
    </div>
  )
}

export default Home