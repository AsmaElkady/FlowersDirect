import { Card, Button } from "react-bootstrap";
// import type { Product } from "../../types/Product";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/slices/cartSlice";
import type { IProduct } from "../../Types/productType";
import type { RootState } from "../../redux/store";
import { addToFav } from "../../redux/slices/favSlice";

type Props = {
    product: IProduct;
};

export default function ProductCard({ product }: Props) {
    const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
    const favItem = useSelector((state: RootState) => state.FavSlice.favItem);
    const dispatch = useDispatch()
    const { name, image, price, category ,id} = product;
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
                <Button variant="outline-primary" size="sm" disabled={cartItems.some((item:IProduct)=> item.id === id)} onClick={() => dispatch(AddToCart(product))}>Add to Cart</Button>
                <Button variant="outline-primary" size="sm" disabled={favItem.some((item: IProduct) => item.id === id)} onClick={() => dispatch(addToFav(product))}>Add to Favorite</Button>
            </Card.Body>
        </Card>
    )
}
