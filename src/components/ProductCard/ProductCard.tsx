import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/slices/cartSlice";
import type { IProduct } from "../../Types/productType";
import type { AppDispatch, RootState } from "../../redux/store";
import { addFavApi } from "../../redux/slices/favSlice";
import "./ProductCard.css";
import { addOrUpdateCartApi } from "../../redux/slices/cartApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
    const { name, image, price, category, rating , id } = product;
    const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
    const favItem = useSelector((state: RootState) => state.FavSlice.favItem);
    const dispatch = useDispatch()
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
                        <button className="icon-btn fav-btn" disabled={favItem.some((item: IProduct) => item.id === id)} onClick={() => dispatch(addToFav(product))}>
                            <i className="fa-regular fa-heart"></i>
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

                    <div className="mt-3 me-4">
                        <Button variant="outline-primary" disabled={cartItems.some((item:IProduct)=> item.id === id)} onClick={() => dispatch(AddToCart(product))}>
                            Add to Cart
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
