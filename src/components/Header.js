import React from 'react'
import  './Components Css/Header.css'
import { Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    console.log(basket)
    return (
        <nav className="header">
            {/* image logo */}
            <Link to="/home" >
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header__logo" />
            </Link>
            {/* search bar with search icon */}
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            {/* 3 links on right side  */}
            <div className="header__nav">
                {/* 1st Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Hello</span>
                        <span className="header__optionsLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Returns</span>
                        <span className="header__optionsLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* 3rd Link */}
                <Link to="/login" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Your</span>
                        <span className="header__optionsLineTwo">Prime</span>
                    </div>
                </Link>
                {/* Shopping Cart/Basket */}
                <Link to="/checkout" className="header__link">
                    <div className="header__OptionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
    <span className="header__optionLineTwo header_BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header