import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = (item)=>{
       dispatch(clearCart(item))
    }

    return (
    <div className="text-center m-10 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            {cartItems.length === 0 && <h1>Add items to cart , it is empty....!!!</h1>}
            <button className="p-1 m-2 text-white bg-black rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems} />
        </div>
    </div>
)
}

export default Cart;