import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Exhibitions from "./Pages/Exhibitions/Exhibitions";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="exhibitions" element={<Exhibitions />} />
        <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
