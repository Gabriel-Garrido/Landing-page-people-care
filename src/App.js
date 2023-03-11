import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import LandingPage from './component/landingPage';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route element={<LandingPage />} path="/" />
          </Routes>      
    </BrowserRouter>
  );
}

export default App;
