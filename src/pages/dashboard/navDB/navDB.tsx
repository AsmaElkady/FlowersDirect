import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavDB() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/public/img/nav/1.png"
              width="200"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
