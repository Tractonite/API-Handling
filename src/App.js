import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import NavigationComponent from './components/NavigationComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessNewsComponent from './components/BusinessNewsComponent';
import SportsNewsComponent from './components/SportsNewsComponent';

function App() {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route path = "business" element = {<BusinessNewsComponent />} />
        <Route path = "sports" element = {<SportsNewsComponent />} />
        
      </Routes>
    </>
  );
}

export default App;
