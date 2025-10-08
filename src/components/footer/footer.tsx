import { Col, Container, Row } from "react-bootstrap";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css"

export default function Footer() {
    return (
        <>

            <footer className="bg-light">

                <Container className="py-5">

                    <Row>
                        <Col>
                            <h4>CATEGORIES</h4>
                            <Row>
                                <Col>
                                    <p>Asiatic Lities</p>
                                    <p>Calla Lities</p>
                                </Col>
                                <Col>
                                    <p>Gerbera Daisy</p>
                                    <p>Greens</p>
                                </Col>
                                <Col>
                                    <p>
                                        Seasonal Flowers
                                    </p>
                                    <p>
                                        Snapdragons
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <h4>COMPANY</h4>
                            <p>About Us</p>
                            <p>Privacy Policy</p>

                        </Col>
                        <Col>
                            <h4>SOCIAL MEDIA</h4>
                            <Row>
                                <Col>
                                    <div>
                                        <InstagramIcon />
                                        <p className="d-inline-block px-3">Instagram</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div>
                                        <FacebookIcon />
                                        <p className="d-inline-block px-3">Facebook</p>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <img src="/public/img/nav/1.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    )
}