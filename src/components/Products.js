import React from 'react'
import '../styles/Products.css';
const Products = ({state, dispatch}) => {
    const {products, cart} = state;
  return (
    <div className='products'>
        {/* map through the products array */}
        {products.map((product)=>(
         <div className='card' key={product.id}>
            {/* image tag */}
            <img src={product.thumbnail} alt={product.title}
            style={{height:200, objectFit:"cover"}}/>
            {/* product title and the product price */}
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <span>{product.title}</span>
                <b>Rs {product.price}</b>
                {/* here b is for bold */}
            </div>
            {/* logic to check whether item is present in the cart or not
            if yes display remove from cart if not display add to cart     */}
            {cart.some((item)=>item.id===product.id)?
            (<button style={{
                padding: 5,
                border: 0,
                borderRadius: 5,
                backgroundColor:"#e53935",
                color:"white",
            }}
            onClick={()=>dispatch({
                type:"REMOVE_FROM_CART", 
                payload: {
                    id: product.id,
                   
                }
            })}
            >
                Remove from Cart
            </button>
            ):(
                <button style={{
                    padding: 5,
                    border: 0,
                    borderRadius: 5,
                    backgroundColor:"green",
                    color:"white",
                }}
                onClick={()=>dispatch({
                    type:"ADD_TO_CART", 
                    payload: {
                        id: product.id,
                        title: product.title,
                        thumbnail: product.thumbnail,
                        qty: 1,
                        price: product.price
                    }
                })}
                >
                    Add to Cart
                </button>
            )}
      </div>   
        ))}
    </div>
  )
}

export default Products