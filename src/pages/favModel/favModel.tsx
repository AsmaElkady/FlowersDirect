
import Modal from "react-bootstrap/Modal";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { IProduct } from "../../Types/productType";
import { AddToCart } from "../../redux/slices/cartSlice";
import CloseIcon from "@mui/icons-material/Close";
import { removeFav, clearAll } from "../../redux/slices/favSlice";

type Props = {
    show: boolean;
    onHide: () => void;
};

export default function FavModel(props: Props) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.Cart.cartItems);
    const favItems = useSelector((state: RootState) => state.FavSlice.favItem as IProduct[]);



    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Favorite</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Button variant="primary" onClick={() => dispatch(clearAll())} className="mb-3">
                    Clear All
                </Button>

                {favItems && favItems.length > 0 ? (
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        {favItems.map((item) => (
                            <Card
                                key={item.id}
                                className="shadow-sm border-0 rounded-4 p-2 position-relative"
                                style={{ width: "220px", minHeight: "350px" }}
                            >
                                <Button
                                    className="position-absolute"
                                    style={{ top: 8, right: 8, background: "transparent", border: "none" }}
                                    onClick={() => dispatch(removeFav(item))}
                                >
                                    <CloseIcon className="text-primary" />
                                </Button>

                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    alt={item.name}
                                    style={{ height: "220px", objectFit: "contain" }}
                                />
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-semibold">{item.name}</Card.Title>
                                    <Card.Subtitle className="text-muted small mb-2">{item.category}</Card.Subtitle>
                                    <Card.Text className="fw-bold">{item.price} EGP</Card.Text>

                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        disabled={cartItems.some((p: IProduct) => p.id === item.id)}
                                        onClick={() => dispatch(AddToCart(item))}
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <h2 className="text-center text-muted">No favorites yet</h2>
                )}
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

