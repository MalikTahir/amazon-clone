import React from 'react';
import './Components Css/Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <img
        className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        />

        <div className="home__row">

            <Product 
                id={151}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
                rating={5}
            />
            {/* 2nd Product */}
            <Product 
                id={21}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                rating={5}
            />
        </div>
        <div className="home__row">
            <Product 
                id={12}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={5}
            />
            <Product 
                id={14}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv8ToexTe3NOUeewpoXUJg78guPXhjY-oxTA&usqp=CAU"
                rating={5}
            />
            <Product 
                id={11}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWLrG-MvyBWlBZ4hhlSPujbcKUjnb7qf3ozQ&usqp=CAU"
                rating={5}
            />
        </div>
        <div className="home__row">
        <Product 
                id={1}
                title={"This is going to be the product that awill be added in my demo react app"}
                price={159.12}
                image="https://tkdigitalstudio.co.uk/wp-content/uploads/2019/09/web_-SMALLER_main.jpg"
                rating={5}
                />    
        </div>
    </div>
  );
}

export default Home;
