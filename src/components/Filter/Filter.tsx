import { useEffect, useRef, useState } from "react";
import { Button, Form, Row, Col, Offcanvas } from "react-bootstrap";

export default function Filter() {
    const colors = ["Green", "Yellow", "Pink", "Purple", "Blue", "Orange", "Red", "Black", "White"];
    const categories = ["Asiatic Lilies", "Fillers", "Carnations", "Iris", "Lisianthus", "Roses", "Tulips"];
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [price, setPrice] = useState(50);
    const [showFilter, setShowFilter] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const filterRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClear = () => {
        setSelectedColor("");
        setSelectedCategory("");
        setPrice(0);
    };

    const FilterBody = (
        <div ref={filterRef}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0 text-primary">FILTERS</h6>
                <Button variant="secondary" className="rounded-pill text-primary" onClick={handleClear}>CLEAR</Button>
            </div>

            <Form.Label>PRICE</Form.Label>
            <Form.Range min={0} max={500} value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mb-4" />
            <Form.Text className="d-flex justify-content-between mb-4">
                <span className="text-muted">0 EGP</span>
                <span className="fw-bold text-primary">{price} EGP</span>
                <span className="text-muted">500 EGP</span>
            </Form.Text>

            <Form.Label>COLOR</Form.Label>
            <Row className="g-2 mb-4">
                {colors.map((color) => (
                    <Col xs="auto" key={color}>
                        <Button
                            variant={selectedColor === color ? "secondary" : "outline-secondary"}
                            onClick={() => setSelectedColor(color)}
                            className="d-flex align-items-center gap-2 rounded-pill"
                        >
                            <span
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    backgroundColor: color.toLowerCase(),
                                    border: "1px solid #ccc",
                                    display: "inline-block",
                                }}
                            ></span>
                            <span className="text-primary">{color}</span>
                        </Button>
                    </Col>
                ))}
            </Row>

            <Form.Label>Category</Form.Label>
            <Row className="g-2 mb-4">
                {categories.map((cat) => (
                    <Col xs="auto" key={cat}>
                        <Button
                            variant={selectedCategory === cat ? "secondary" : "outline-secondary"}
                            onClick={() => setSelectedCategory(cat)}
                            className="rounded-pill">
                            <span className="text-primary">{cat}</span>
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
    return (
        <div>
            {/* Offcanvas Button */}
            {isMobile && (
                <Button
                    variant="primary"
                    className="d-md-none mb-3"
                    onClick={() => setShowFilter(true)}
                >
                    <i className="fa-solid fa-filter me-2" aria-hidden="true"></i> Filters
                </Button>
            )}

            {/* Desktop */}
            {!isMobile && <div>{FilterBody}</div>}

            {/* Mobile */}
            <Offcanvas show={showFilter} onHide={() => setShowFilter(false)} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{FilterBody}</Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
