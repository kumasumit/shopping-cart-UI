import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  const updateQty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };
  useEffect(() => {
    setTotal(
      cart.reduce(
        (sum, product) => sum + Number(product.price) * product.qty,
        0
      )
    );
  }, [cart]);
  return (
    <div className="cart">
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}> Subtotal: Rs {total}</b>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {/* Now we are going to display the product items in the cart and calculate the subTotal */}
        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                {/* image tag */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: 70, objectFit: "cover" }}
                />
                {/* product title and the product price */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>{product.title}</span>
                  <b>Rs {product.price}</b>
                  {/* here b is for bold */}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => updateQty(product.id, product.qty - 1)}>
                  -
                </button>
                <span>{product.qty}</span>
                <button onClick={() => updateQty(product.id, product.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: "center" }}>
            Cart is empty
          </span>
        )}
      </div>
    </div>
  );
};

export default Cart;
