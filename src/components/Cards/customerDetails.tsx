import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import "../../index.css";

const CustomerDetails = ({ show, item, onClose }) => {
  console.log("item", item);
  return (
    <div
      className="border-card mt-5 ms-4 border-1 p-1 rounded-3"
      style={{ width: "18rem", display: show ? "flex" : "none" }}
    >
      <Card border="primary" className="bg-white">
        {/* <Card.Header
          className="bg-transparent border-0 pb-0"
          style={{ width: 20, height: 20 }}
        >
          <CloseButton onClick={onClose} className="justify-content-end" />
        </Card.Header> */}
        <Card.Body>
          <Container className="d-flex p-0 justify-content-between">
            <div>
              <Card.Title>{item?.username}</Card.Title>
              <Card.Subtitle>{item?.email}</Card.Subtitle>
            </div>
            <CloseButton onClick={onClose} className="justify-content-end" />
          </Container>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomerDetails;
