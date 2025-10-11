import { Card, Button } from "react-bootstrap";
import type { Product } from "../../types/Product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
    const { name, image, price, category, rating } = product;
    return (
        <Card className="shadow-sm border-0 rounded-4 p-2" style={{ minHeight: "350px" }}>
            <Card.Img
                variant="top"
                src={image}
                alt={name}
                style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                <div className="text-start">
                    <Card.Title className="fw-semibold">{name}</Card.Title>
                    <Card.Subtitle className="text-muted small mb-2">{category}</Card.Subtitle>
                    <Card.Text className="fw-bold mb-1">{price} EGP</Card.Text>
                    <Card.Text className="fw-bold">Rating: {rating}</Card.Text>
                </div>

                <div className="mt-3 me-4">
                    <Button variant="outline-primary">
                        Add to Cart
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
