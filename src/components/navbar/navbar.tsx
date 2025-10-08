
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function NavbarComponent() {
    return (
        // <Navbar bg="light" data-bs-theme="light">
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img src="/public/img/nav/1.png" alt="" />
        //         </Navbar.Brand>
        //         <Nav className="mx-auto">
        //             <Nav.Link href="#home" className="text-primary">HOME</Nav.Link>
        //             <Nav.Link href="#features" className="text-primary">PRODUCTS</Nav.Link>
        //             <Nav.Link href="#pricing" className="text-primary">ABOUT</Nav.Link>
        //             <Nav.Link href="#pricing" className="text-primary">CONTACT</Nav.Link>
        //         </Nav>
        //         <Nav className="ms-auto">
        //             <Nav.Link href="#home" >

        //                 <PersonIcon className='text-primary' />

        //             </Nav.Link>
        //             <Nav.Link href="#features">

        //                 <FavoriteIcon className='text-primary' />
        //             </Nav.Link>
        //             <Nav.Link href="#pricing">

        //                 <ShoppingCartIcon className='text-primary' />
        //             </Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>

        // <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img src="/public/img/nav/1.png" alt="" />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav" className="ms-auto">
        //             <Nav className="mx-auto">
        //                 <Nav.Link href="#home" className="text-primary">HOME</Nav.Link>
        //                 <Nav.Link href="#features" className="text-primary">PRODUCTS</Nav.Link>
        //                 <Nav.Link href="#pricing" className="text-primary">ABOUT</Nav.Link>
        //                 <Nav.Link href="#pricing" className="text-primary">CONTACT</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //         <Nav className="ms-auto">
        //             <Nav.Link href="#home" >
        //                 <PersonIcon className='text-primary' />
        //             </Nav.Link>
                    
        //             <Nav.Link href="#features">
        //                 <FavoriteIcon className='text-primary' />
        //             </Nav.Link>

        //             <Nav.Link href="#pricing">
        //                 <ShoppingCartIcon className='text-primary' />
        //             </Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>

        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="#home">
                    <img src="/public/img/nav/1.png" alt="" />
                </Navbar.Brand>



                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className="text-primary">HOME</Nav.Link>
                        <Nav.Link href="#features" className="text-primary">PRODUCTS</Nav.Link>
                        <Nav.Link href="#pricing" className="text-primary">ABOUT</Nav.Link>
                        <Nav.Link href="#pricing" className="text-primary">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <div className="d-flex align-items-center ms-auto">
                    <Nav className="d-flex flex-row">
                        <Nav.Link href="#home"><PersonIcon className='text-primary' /></Nav.Link>
                        <Nav.Link href="#features"><FavoriteIcon className='text-primary' /></Nav.Link>
                        <Nav.Link href="#pricing"><ShoppingCartIcon className='text-primary' /></Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-2 border-0" />
                </div>
            </Container>
        </Navbar>


    );
}

