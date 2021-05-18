import React from 'react';
import Product from './Product';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <Carousel>
                <div>
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB667972819_.jpg" alt="" />
                </div>
                <div>
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Apple/May/MSD/iPhone12/D23407104_IN_WL_MSD_iPhone12_DesktopTallHero_1500x600._CB669806582_.jpg" alt="" />
                </div>
            </Carousel>
            <div className="home__row">
                <Product 
                    //   ₹
                    id={12347}
                    title="Redmi Note 10 | 48MP Quad Camera | AMOLED Display"
                    price={12499}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41TEQ0dgYkS._AA210_.jpg"
                />
                <Product 
                    //   ₹
                    id={12348}
                    title="Fossil Chronograph Brown Dial and Strap Chronograph Watch"
                    price={8396}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41oIAtv0guL._AC_.jpg"
                />
                <Product 
                    //   ₹
                    id={12349}
                    title="VILON (Set of 6) Fashioned Whiskey Glass - 300 Ml Heavy Base Rocks Barware Glasses for Scotch, Bourbon and Cocktail Drinks"
                    price={499}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51njwQiZHHS.jpg"
                />
            </div>
            <div className="middle__image">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
            </div>
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
                    id={12346}
                    title="Lenovo Ideapad Slim 3 AMD Ryzen 3 15.6 inch (39.62 cms) Full HD Thin and Light Laptop (4GB/1TB  HDD/Windows 10/MS Office 2019/Platinum Grey/1.85Kg), 81W10057IN"
                    price={29990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41PnIUzyYML.jpg"
                />
            </div>
            <div className="middle__image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product 
                    //   ₹
                    id={12350}
                    title="OnePlus 138.8 cm (55 inches) U Series 55U1 Series 4K Ultra HD LED Smart Android TV 55UA0A01 (Black) (2020 Model)"
                    price={52999}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71de4PH0BnL._AC_UY218_.jpg"
                />
            </div>
            
            {/* https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Apple/May/MSD/iPhone12/D23407104_IN_WL_MSD_iPhone12_DesktopTallHero_1500x600._CB669806582_.jpg */}
        </div>
    )
}

export default Home
