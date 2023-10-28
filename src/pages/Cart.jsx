import CartBottom from "../components/Cart/CartBottom"
import CartMid from "../components/Cart/CartMid"
import CartTop from "../components/Cart/CartTop"
import SuperDiscount from './../components/SuperDiscount';

const Cart = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <CartTop />
      <CartMid />
      <CartBottom />
      <SuperDiscount />
    </div>
  )
}

export default Cart
