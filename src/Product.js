import React from 'react';
import './Product.css';
import uuid from 'react-uuid'

function Product({ id, title, price, rating, image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p key={uuid()}>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="product"/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
