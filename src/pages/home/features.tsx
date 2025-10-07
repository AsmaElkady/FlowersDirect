import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import "./feature.css"
export default function Features() {
    return (
        <Container className="my-5 " >
            <Row className="transparentSec text-center justify-content-center align-items-center feature-row">

                {/* الميزة 1 */}
                <Col md={3} sm={6} className="d-flex align-items-center justify-content-center feature-col">
                    <PriceCheckIcon style={{ color: "var(--mainColor)", fontSize: "40px", marginRight: "10px" }} />
                    <div className="text-start">
                        <h6 className="mb-1">Wholesale Prices</h6>
                        <p className="mb-0 text-muted">Vel at hendrerit urna et maecenas venenatis.</p>
                    </div>
                </Col>

                {/* الميزة 2 */}
                <Col md={3} sm={6} className="d-flex align-items-center justify-content-center feature-col">
                    <ShieldIcon style={{ color: "var(--mainColor)", fontSize: "40px", marginRight: "10px" }} />
                    <div className="text-start">
                        <h6 className="mb-1">Secure Checkout</h6>
                        <p className="mb-0 text-muted">Vitae gravida arcu, ante lorem leo.</p>
                    </div>
                </Col>

                {/* الميزة 3 */}
                <Col md={3} sm={6} className="d-flex align-items-center justify-content-center feature-col">
                    <LocalFloristIcon style={{ color: "var(--mainColor)", fontSize: "40px", marginRight: "10px" }} />
                    <div className="text-start">
                        <h6 className="mb-1">Best Quality</h6>
                        <p className="mb-0 text-muted">Tincidunt mattis vitae at massa id.</p>
                    </div>
                </Col>

                {/* الميزة 4 */}
                <Col md={3} sm={6} className="d-flex align-items-center justify-content-center feature-col">
                    <SupportAgentIcon style={{ color: "var(--mainColor)", fontSize: "40px", marginRight: "10px" }} />
                    <div className="text-start">
                        <h6 className="mb-1">Client Service</h6>
                        <p className="mb-0 text-muted">Donec potenti velit est vivamus velit.</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}
