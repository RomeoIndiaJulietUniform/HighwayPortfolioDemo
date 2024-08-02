import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../Styles/Navbar.css" 

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="sections">
        <Nav.Link as={Link} to="/HighwayPortfolioDemo/">About</Nav.Link>
        <Nav.Link as={Link} to="/HighwayPortfolioDemo/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/HighwayPortfolioDemo/shop">Shop</Nav.Link>
        <Nav.Link as={Link} to="/HighwayPortfolioDemo/tour">Tour</Nav.Link>
      </div>
    </div>
  );
}

export default NavBar;
