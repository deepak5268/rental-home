import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <header className='header'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="./logo.png" className='img-fluid' alt="logo" /></Navbar.Brand>
                    <div className='d-lg-block d-flex gap-3'>
                        <Link className='header_tel d-lg-none rounded-pill' to={"tel:9589570166"}><i className="fas fa-phone me-2"></i>+91-9589570166</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='active'>Home</Nav.Link>
                            <Nav.Link to="#!">About Us</Nav.Link>
                            <Nav.Link to="#!">Services</Nav.Link>
                            <Nav.Link to="#!">Our Team</Nav.Link>
                            <Nav.Link to="#!">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className='header_tel d-lg-block d-none rounded-pill' to={"tel:9589570166"}><i className="fas fa-phone me-2"></i>+91-9589570166</Link>
                </Container>
            </Navbar>
        </header>
        </>
    )
}
export default Header;