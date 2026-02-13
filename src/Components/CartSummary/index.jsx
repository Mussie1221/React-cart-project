import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../Layout";

const CartSummary = () => {
  const context = useContext(ShoppingCartContext);

  const totalPrice = context.cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

const handleCheckout = () => {
  if (context.cartProducts.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const totalPrice = context.cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  const orderToAdd = {
    date: new Date().toLocaleDateString(),
    products: context.cartProducts,
    totalProducts: context.cartProducts.length,
    totalPrice: totalPrice
  }

  context.setOrder([...context.order, orderToAdd])

  // ✅ Use the helper instead of the raw setter
  context.clearCart()

  alert("Checkout successful! Order placed.")
}


  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <h1 className="font-medium text-xl">Cart Summary</h1>
      </div>

      <div className="flex flex-col w-80 space-y-4">
        {context.cartProducts.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          context.cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-12 h-12 object-contain rounded"
                  src={product.images[0]}
                  alt={product.title}
                />
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    ${product.price} x {product.quantity}
                  </p>
                </div>
              </div>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => context.removeFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}

        {context.cartProducts.length > 0 && (
          <div className="px-2 mt-4">
            <p className="flex justify-between items-center mb-3">
              <span className="font-light">Total:</span>
              <span className="font-medium text-2xl">${totalPrice}</span>
            </p>

            <button
              className="bg-black py-3 text-white w-full rounded-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartSummary;
