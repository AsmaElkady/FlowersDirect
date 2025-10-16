
import { useDispatch } from 'react-redux';
// import type { IProduct } from './../../Types/productType';
import { AddToCart, RemoveFromCart, decreaseQuantity } from "../../redux/slices/cartSlice";
import type { ICartProduct } from '../../Types/cart';
// import { useEffect, useState } from 'react';

type props = {
    item: ICartProduct


}
export default function DrowCart({ item }: props) {
    const dispatch = useDispatch();
    // const [quantity, Setquantity] = useState(1)
    
    // function Increase() {
    //     if(quantity < item.totalQuantity){
    //         Setquantity((q) => q += 1)
    //         console.log("halooz");
    //         dispatch(AddToCart(item))
    //     }
    // }
    // function decrease() {
    //     if(quantity > 1){
    //         Setquantity((q) => q -= 1)
    //         console.log("halooz");
    //         dispatch(decreaseQuantity(item))
    //     }

    // }
    // useEffect(() => {
        
    // }, [])
    return (
        <>
            <div
                key={item.id}
                className="cart-item d-flex align-items-center p-3 rounded-4 shadow-sm mb-3"
            >
                <div className="thumb me-3">
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{
                            width: 120,
                            height: 90,
                            objectFit: "cover",
                            borderRadius: 8,
                        }}
                    />
                </div>
                <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1 text-muted small">{item.desc}</p>
                    <div className="d-flex align-items-center gap-3">
                        <div className="qty-controls d-flex align-items-center">
                            <button className="qty-btn" aria-label="decrease"  onClick={()=>dispatch(decreaseQuantity(item))} >
                                −
                            </button>
                            <div className="quantity-badge">{item.quantity}</div>
                            {/* disabled={quantity < item.totalQuantity ? false : true} */}
                            <button className="qty-btn" aria-label="increase" onClick={() => dispatch(AddToCart(item))} >
                                +
                            </button>
                        </div>
                        <div className="fw-bold">{item.totalPrice} EGP</div>
                        <button
                            className="btn btn-outline-primary btn-sm ms-auto"
                            onClick={() => dispatch(RemoveFromCart(item.id))}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
