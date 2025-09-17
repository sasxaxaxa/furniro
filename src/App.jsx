import Home from "./pages/Home.jsx";
import './assets/styles/index.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header/Header.jsx";
import Footer from "./components/layouts/Footer/Footer.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct.jsx";
import ScrollToTop from "./components/elements/ScrollToTop.jsx";

function App() {

  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
