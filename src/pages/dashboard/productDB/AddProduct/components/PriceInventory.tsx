import { Form, Row, Col } from "react-bootstrap"

function PriceInventory({ form, handleChange }: any) {
    return (
        <>
            <div>
                <h5>Pricing</h5>
                <Form.Group className="mb-3">
                    <Form.Label>Price (EGP)</Form.Label>
                    <Form.Control
                        type="number"
                        min={0}
                        max={500}
                        value={form.price}
                        name="price"
                        className="w-50"
                        placeholder="150 EGP"
                        required
                        onChange={handleChange}
                    />
                </Form.Group>
            </div>
            <div className="section">
                <h5>Inventory</h5>
                <Row>
                    <Col>
                        <Form.Label>Stock Quantity</Form.Label>
                        <Form.Control
                            name="totalQuantity"
                            type="number"
                            min={0}
                            className="w-50 mb-3"
                            placeholder="quantity"
                            value={form.totalQuantity}
                            required
                            onChange={handleChange}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Stock Status</Form.Label>
                        <Form.Select>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
                        </Form.Select>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PriceInventory
