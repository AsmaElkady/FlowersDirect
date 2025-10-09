import { Card, Button } from "react-bootstrap";

interface ProductProps {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
}

export default function ProductCard({ name, image, price, category }: ProductProps) {
    return (
        <Card className="shadow-sm border-0 rounded-4 p-2" style={{ minHeight: "350px" }}>
            <Card.Img
                variant="top"
                src={image}
                alt={name}
                style={{ height: "220px", objectFit: "contain" }}
            />
            <Card.Body className="text-center">
                <Card.Title className="fw-semibold">{name}</Card.Title>
                <Card.Subtitle className="text-muted small mb-2">{category}</Card.Subtitle>
                <Card.Text className="fw-bold">
                    {price} EGP
                </Card.Text>
                <Button variant="outline-primary" size="sm">Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}
