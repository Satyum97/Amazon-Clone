import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { store } from "react-notifications-component"
import "animate.css"
import 'react-notifications-component/dist/theme.css'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("this is the basket >>>> ", basket)
    const addToBasket = () => {

        store.addNotification({
            title: title,
            message: "Item has been added in to the cart successfully",
            type: "success",
            container: "top-right",
            insert: "top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],

            dismiss: {
                duration: 2500,
                showIcon: true,
                onScreen: true,
            }, width: 400
        });

        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>

            <img src={image} alt="" />

            <button onClick={addToBasket} className="product__button">Add to Basket</button>
        </div>
    );
}

export default Product;