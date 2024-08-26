import { Container, NavbarBrand } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css"


const Header =() => {
    return(
<Navbar bg="primary" variant="dark">
    <Container> 
        <Navbar.Brand to="/"><strong>AppUser Managment System</strong></Navbar.Brand>
       {/* <Nav class="ml-auto">
        <Nav.Link as={Link} to="/" className="nav-link">AppUser</Nav.Link> 
        <Nav.Link as={Link} to="/appUser" className="nav-link">Post AppUser</Nav.Link> 
        </Nav>*/}
    </Container>
</Navbar>
    )
}
export default Header;