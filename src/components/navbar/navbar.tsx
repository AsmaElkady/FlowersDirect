
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


function NavbarComponent() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/public/img/nav/1.png" alt="" />
                </Navbar.Brand>
                <Nav className="mx-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#features">PRODUCTS</Nav.Link>
                    <Nav.Link href="#pricing">ABOUT</Nav.Link>
                    <Nav.Link href="#pricing">CONTACT</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">

                        <PersonIcon style={{ color: "black" }} />
                    </Nav.Link>
                    <Nav.Link href="#features">

                        <FavoriteIcon style={{ color: "black" }} />
                    </Nav.Link>
                    <Nav.Link href="#pricing">

                        <ShoppingCartIcon style={{ color: "black" }} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    );
}

export default NavbarComponent;