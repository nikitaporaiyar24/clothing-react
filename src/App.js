import './App.css';
import LandingPage from './pages/LandingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      
          <Routes>

            <Route path='/' element={<LandingPage />}></Route>

          </Routes>
        
      
      </BrowserRouter>
    </>

  );
}

export default App;
