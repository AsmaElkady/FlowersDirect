import { Navbar, Container, Nav } from "react-bootstrap";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import type { RootSatet } from "../../redux/store";

import "./navbar.css";
export default function MyNavbar() {
  const token = useSelector((state: RootSatet) => state.auth.token);
  const username = useSelector((state: RootSatet) => state.auth.name);
  const id = useSelector((state: RootSatet) => state.auth.id);
  console.log(token, username, id);
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#home">
          <img src="/img/nav/1.png" alt="logo" style={{ height: "50px" }} />
        </Navbar.Brand>

        <div className="d-flex align-items-center order-lg-3">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 order-lg-2 ms-2"
          />
          <Nav className="d-flex flex-row">
            <Nav.Link href="#home">
              <PersonIcon className="text-primary" />
            </Nav.Link>
            <Nav.Link href="#fav">
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
            </Nav.Link>
            <Nav.Link href="#cart">
              <div className="position-relative">
                <ShoppingCartIcon className="text-primary mx-3" />
                <span
                  className="bg-secondary position-absolute text-light"
                  style={{
                    top: "-13px",
                    right: "6px",
                    padding: "3px",
                    borderRadius: "50%",
                  }}
                >
                  0
                </span>
              </div>
            </Nav.Link>
          </Nav>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="order-lg-1 justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home" className="text-primary  hover_link">
              HOME
            </Nav.Link>
            <Nav.Link href="#features" className="text-primary hover_link">
              PRODUCTS
            </Nav.Link>
            <Nav.Link href="#about" className="text-primary hover_link">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#contact" className="text-primary hover_link">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
