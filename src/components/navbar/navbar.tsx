// // import { useEffect } from "react";
// // import "./navbar.css"
// import { Link } from "react-router-dom";
// // import PersonIcon from '@mui/icons-material/Person';
// // import FavoriteIcon from '@mui/icons-material/Favorite';

// export default function Navbar() {

//     return (
//         <div className="nav position-fixed w-100">
//             <nav className="navbar navbar-expand-lg" style={{ width: "100%" }}>
//                 <div className="container px-5">
//                     <Link className="mylogo navbar-brand" to="/">
//                         Flowers
//                     </Link>
//                     <button
//                         className="navbar-toggler ms-auto"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarNavDropdown"
//                         aria-controls="navbarNavDropdown"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon ms-auto" />
//                     </button>
//                     <div
//                         className="collapse navbar-collapse justify-content-center"
//                         id="navbarNavDropdown"
//                     >
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" id="home" aria-current="page" to="/">
//                                     HOME
//                                 </Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <Link
//                                     className="nav-link"
//                                     to="/product"
//                                     id="product"
//                                     aria-current="page"
//                                 >
//                                     ALL PRODUCTS
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" id="about" to="/about">
//                                     ABOUT
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">
//                                     CONTACT US
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="icon d-none d-lg-block">
//                         <Link
//                             to="/"
//                             className="text-decoration-none"
//                             data-bs-toggle="modal"
//                             data-bs-target="#favModal"
//                         >

//                             H{/* <FavoriteIcon style={{ color: "black", fontSize: "30" }} /> */}
//                         </Link>
//                         <Link to="/" className="text-decoration-none">
//                             hh{/* <PersonIcon style={{ color: "black", fontSize: "30" }} /> */}
//                         </Link>

//                     </div>
//                     <div>
//                         <button className="hover-button  d-lg-block">
//                             <a href="#" className="fs-6 text-decoration-none">
//                                 LogIn
//                             </a>
//                         </button>
//                         <button className="hover-button">
//                             <a href="#" className="fs-6 text-decoration-none">
//                                 Sign Up
//                             </a>
//                         </button>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function NavbarComponent() {
//     return (
//         <>
//             {/* <Navbar bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//              */}

//             <br />
//             <Navbar bg="light" data-bs-theme="light">
//                 <Container>
//                     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">Home</Nav.Link>
//                         <Nav.Link href="#features">Features</Nav.Link>
//                         <Nav.Link href="#pricing">Pricing</Nav.Link>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <Nav.Link href="#pricing">ALL PRODUCTS</Nav.Link>
                        <Nav.Link href="#features">ABOUT</Nav.Link>
                        <Nav.Link href="#pricing">CONTACT US</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;