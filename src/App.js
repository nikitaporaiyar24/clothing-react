import './App.css';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>

            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/SignIn' element={<SignInPage />}></Route>

          </Routes>
        
      
      </BrowserRouter>
    </>

  );
}

export default App;
