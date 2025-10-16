import { Card} from "react-bootstrap";
import type { Product } from "../../types/Product";
import "./ProductCard.css";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const { name, image, price, category, rating } = product;
    return (
        <div className="main-wrapper">
            <Card className="shadow-sm border-0 rounded-4 p-2 card-wrapper" style={{ minHeight: "350px" }}>
                <div className="card-img-container">
                    <Card.Img className="card-img"
                        variant="top"
                        src={image}
                        alt={name}
                        style={{ height: "220px", objectFit: "contain" }}
                    />
                    <div className="card-icons">
                        <button className="icon-btn fav-btn">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                        <button className="icon-btn cart-btn">
                            <i className="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between align-items-center">
                    <div className="text-start">
                        <Card.Title className="fw-semibold">{name}</Card.Title>
                        <Card.Subtitle className="text-muted small mb-2">{category}</Card.Subtitle>
                        <Card.Text className="fw-bold mb-1">{price} EGP</Card.Text>
                        <Card.Text className="fw-bold">Rating: {rating}</Card.Text>
                    </div>

                    {/* <div className="mt-3 me-4">
                        <Button variant="outline-primary">
                            Add to Cart
                        </Button>
                    </div> */}
                </Card.Body>
            </Card>
        </div>
    )
}
