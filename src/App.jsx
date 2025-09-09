import Home from "./pages/Home.jsx";
import './assets/styles/index.js'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/layouts/Header/Header.jsx";
import Footer from "./components/layouts/Footer/Footer.jsx";

function App() {

  return (
    <>
      <Router>
        <Header/>

        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>

        <Footer/>
      </Router>
    </>
  )
}

export default App
