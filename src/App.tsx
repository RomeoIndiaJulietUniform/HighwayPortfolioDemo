
import './App.css';
import Overlay from './Components/Overlay';
import NavBar from './Components/NavBar';
import { Merchandise } from './Components/Merchandise';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Tour from './Components/Tour';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";

function App() {


  return (
    <>
     <Router>
     <Overlay />
      <NavBar/>
      <Routes>
      <Route path="/HighwayPortfolioDemo/" element={<Home />} />
      <Route path="/HighwayPortfolioDemo/blog" element={<Blog/>}/>
      <Route path="/HighwayPortfolioDemo/shop" element={<Merchandise/>}/>
      <Route path="/HighwayPortfolioDemo/tour" element={<Tour/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
