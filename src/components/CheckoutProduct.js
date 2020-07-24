import React from 'react'
import './Components Css/CheckoutProduct.css'
import { useStateValue } from './StateProvider'
function CheckoutProduct({image,price,rating,title}) {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket=()=>{
        alert("have mercy Sire.Don't you remove me")
        dispatch({
            type:'REMOVE_FROM_BASKET'
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""
            className="CheckoutProduct__ad"/>
            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
