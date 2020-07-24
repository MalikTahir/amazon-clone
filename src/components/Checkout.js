import React from 'react'
import { useStateValue } from './StateProvider'
import './Components Css/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        
        <div className="checkout">
            <Header></Header>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="" className="checkout__ad"/>
            
            {basket?.length===0 ?(
                <div>
                    <h2>Alas! your Basket is Empty</h2>
                </div>
            ):(
                <div className="checkout__title">
                    <h2>Your Basket is full of amazing goods</h2>
                    {basket?.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        ></CheckoutProduct>
                    ))}
                    
                </div>
            )}
        </div>
    )
}

export default Checkout
 