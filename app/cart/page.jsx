"use client"
import CartItem from "../components/cart/CartItem"
import { useCartContext } from "../components/context/CartContext"

const CartPage = () => {
  const { cart } = useCartContext()

  if (cart.length === 0) {
    return <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
      <p>El carrito está vacío.</p>
    </main>;
  }

  return (
    <main className="container m-auto">
      <h2 className="text-2xl my-10 border-b pb-4">Tu compra</h2>
      <ul>
        {cart.map((item) => <CartItem item={item} key={item.slug} />)}
      </ul>
    </main>
  );
}

export default CartPage;