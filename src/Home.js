import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Apple/May/MSD/iPhone12/D23407104_IN_WL_MSD_iPhone12_DesktopTallHero_1500x600._CB669806582_.jpg" alt="" />

            <div className="home__row">
                <Product 
                    //   ₹
                    id={12345}
                    title="Digital thermometers"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
                />
                <Product 
                    //   ₹
                    id={12345}
                    title="Digital thermometers"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
                />
            </div>
            {/* <div className="home__row">
                <Product 
                    //   ₹
                    id={12345}
                    title="Digital thermometers"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
                />
                <Product 
                    //   ₹
                    id={12345}
                    title="Digital thermometers"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
                />
                <Product 
                    //   ₹
                    id={12345}
                    title="Digital thermometers"
                    price={299}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"
                />
            </div> */}
        </div>
    )
}

export default Home
