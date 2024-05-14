import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home.jsx"
import Menu from "./pages/Menu.jsx"
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Reservas from "./pages/reservas.jsx"

import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/reservas" exact element={<Reservas />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;