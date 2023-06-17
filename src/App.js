import './App.css';
import Beers from './components/Beers';
import NewBeer from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import HomePage from './pages/HomePage';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import BeerDetails from './components/BeerDetails';


function App() {
  return (
    <BrowserRouter >
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer-details" element={<BeerDetails />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;