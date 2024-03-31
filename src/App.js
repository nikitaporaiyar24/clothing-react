import './App.css';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import CartPage from './pages/CartPage';
import ProductListingPage from './pages/ProductListingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import WishlistPage from './pages/WishlistPage';
import MensPage from './pages/MensPage';




function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>

            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/signin' element={<SignInPage />}></Route>
            <Route path='/mens-page' element={<ProductListingPage category='Mens' />}></Route>
            <Route path='/womens-page' element={<ProductListingPage category='Womens' />}></Route>
            <Route path='/hoodies' element={<ProductListingPage category='Hoodies' />}></Route>
            <Route path='/shirts' element={<ProductListingPage category='Shirts' />}></Route>
            <Route path='/tshirts' element={<ProductListingPage category='T-shirts' />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/wishlist' element={<WishlistPage />}></Route>

          </Routes>
        
      
      </BrowserRouter>
    </>

  );
}

export default App;
