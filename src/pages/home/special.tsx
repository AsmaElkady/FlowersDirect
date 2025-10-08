import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "./special.css"
import Container from "react-bootstrap/esm/Container";


export default function Special() {
    return (
        <>
            <Container className="mt-5">

                <Row >
                    <Col md={4} sm={12} className="p-5 first rounded-5">
                        <h2>Spacial Orders</h2>
                        <img src="/public/img/Home/10.png" alt="" />
                        <p>Don't see what your looking for? We have access to other flowers and greens which may not be listed on our website.</p>
                    </Col>
                    <Col md={4} sm={12} className="sec rounded-5">

                    </Col >
                    <Col md={4} sm={12} className="p-5 third rounded-5">
                        <p>Send your request and a Flowers Direct team member will get back to you with prices.</p>
                        <Button className="bg-primary text-light">CONTACT US</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}