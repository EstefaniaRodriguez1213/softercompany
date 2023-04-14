import './App.css';
import NavBar from './components/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Education from './components/Education/Education';
import AboutUs from './components/About us/AboutUs';
import ContactUs from './components/Contact Us/ContactUs';
import EstudiaNosotros from './components/EstudiaNosotros/EstudiaNosotros';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
     <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/education" element={<Education></Education>}></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
      <EstudiaNosotros></EstudiaNosotros>
    </div>
  );
}

export default App;
