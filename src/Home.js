import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt=""/>
                <div className="home__row">
                    <Product
                    title='Gaming Chair'
                    price ={2200}
                    image='https://images-na.ssl-images-amazon.com/images/I/71rQGaRbS1L._SS1000_.jpg'
                    rating={3}
                    />
                    <Product
                    title='Gaming Desk'
                    price ={2200}
                    image='data:image/jpeg;base64,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'
                    rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                    title='Gaming Mouse'
                    price ={2200}
                    image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425367cv18d.jpg'
                    rating={3}
                    />
                    <Product
                    title='Gaming Keyboard'
                    price ={2200}
                    image='https://images-na.ssl-images-amazon.com/images/I/71cngLX2xuL._AC_SL1500_.jpg'
                    rating={3}
                    />
                    <Product
                    title='Gaming Headset'
                    price ={2200}
                    image='https://images-na.ssl-images-amazon.com/images/I/51FUBWt%2BTlL._SL1000_.jpg'
                    rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                    title='Gaming Monitor'
                    price ={2200}
                    image='https://images-na.ssl-images-amazon.com/images/I/71PjhKA%2BllL._AC_SL1500_.jpg'
                    rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
