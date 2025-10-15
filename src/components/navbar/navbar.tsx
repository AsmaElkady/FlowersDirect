import { Navbar, Container, Nav, Button } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
// import type { RootSatet } from "../../redux/store";

import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router";
import type { RootState } from "../../redux/store";
import FavModel from "../../pages/favModel/favModel";

export default function MyNavbar() {
  const [modalShow, setModalShow] = useState(false);
  const favlength = useSelector((state: RootState) => state.FavSlice.favItem.length)
  const cartlength = useSelector((state: RootState) => state.Cart.cartItems.length)
  const token = useSelector((state: RootState) => state.auth.token);
  const username = useSelector((state: RootState) => state.auth.name);
  const id = useSelector((state: RootState) => state.auth.id);
  console.log(token, username, id);
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand >
            <Link to={"/"}>
              <img src="/img/nav/1.png" alt="logo" style={{ height: "40px" }} />

            </Link>
          </Navbar.Brand>

          <div className="d-flex align-items-center order-lg-3">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border-0 order-lg-2 ms-2"
            />
            <Nav className="d-flex flex-row justify-content-center align-items-center">
              <Link to="/">
                <PersonIcon className="text-primary" />
              </Link>
              {/* <Nav.Link href="/model">
              <div className="position-relative">
                <FavoriteIcon className="text-primary mx-3" />
                <span
                  className="position-absolute "
                  style={{ top: "-13px", right: "2px" }}
                >
                  <img src="/img/nav/Vector.png" alt="" width={"25px"} />
                </span>
                <span
                  className=" position-absolute text-primary "
                  style={{ top: "-10px", right: "8px", fontSize: "15px" }}
                >
                  10
                </span>
              </div>
            </Nav.Link> */}
              <Link to="/cart">
                <div className="position-relative">
                  <ShoppingCartIcon className="text-primary mx-3" />
                  <span
                    className="bg-secondary position-absolute text-light"
                    style={{
                      top: "-15px",
                      right: "7px",
                      padding: "2px",
                      borderRadius: "50%",
                    }}
                  >
                    {cartlength}
                  </span>
                </div>
              </Link>
              <Button onClick={() => setModalShow(true)} className="border-0 bg-transparent position-relative">
                <FavoriteIcon className="text-primary" />
                <span
                  className="bg-secondary position-absolute text-light"
                  style={{
                    top: "-10px",
                    right: "6px",
                    padding: "2px",
                    borderRadius: "50%",
                  }}
                >
                  {favlength}
                </span>
              </Button>
            </Nav>
          </div>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="order-lg-1 justify-content-center"
          >

            <Nav>

              <div className="d-flex  flex-column flex-lg-row gap-3 gap-lg-4 ">

                <Link to="/" className="text-decoration-none hover_link">
                  HOME
                </Link>
                <Link to="/products" className="text-decoration-none hover_link">
                  PRODUCTS
                </Link>
                <Link to="/about" className=" text-decoration-none hover_link">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-decoration-none hover_link">
                  CONTACT
                </Link>
              </div>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Model */}
      <FavModel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
