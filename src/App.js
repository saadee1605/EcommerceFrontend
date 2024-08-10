import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Item from './Components/Item/Item';
import Popular from './Components/Popular/Popular';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Footer from './Components/Footer/Footer';
import BreadCrums from './Components/BreadCrums/BreadCrums';
import ProductDisplay from './Components/ProductDIsplay/ProductDisplay'
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Shop />} />
        <Route exact path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route exact path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route exact path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/breadcrum" element={<BreadCrums />} />
        <Route path="product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
