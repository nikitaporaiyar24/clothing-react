import './App.css';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import ProductListingPage from './pages/ProductListingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

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

          </Routes>
        
      
      </BrowserRouter>
    </>

  );
}

export default App;
