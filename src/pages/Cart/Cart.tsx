
import { useDispatch, useSelector } from "react-redux";
import "../../style/cart.css";
import type { RootState, AppDispatch } from "../../redux/store";
import { CleareCart, fetchCart } from "../../redux/slices/cartSlice";
// import type { IProduct } from "../../Types/productType";
import DrowCart from "./DrowCart";
import CartSummary from "./summary";
import type { ICartProduct } from "../../Types/cart";
import { use, useEffect } from "react";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.Cart.cartItems) as ICartProduct[];

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="cart-root container py-4">
      <h2 className="cart-title text-center mb-4">Your Flower Basket</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="list">
            {cartItems.length > 0 ? <button className="btn btn-primary ms-auto d-block" onClick={() => { dispatch(CleareCart()) }}>Clear All</button> :""}
            
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
              
                <div key={item.id}>
                    <DrowCart  item={item} />
                  </div>
                  
                
              ))
            ) : (
              <h4 className="text-center text-muted">There are no items</h4>
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <CartSummary/>
        </div>
      </div>
    </div>
  );
}
