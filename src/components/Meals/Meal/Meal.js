import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import MealItemForm from './MealItemForm/MealItemForm';
import styles from './style/Meal.module.css';

const Meal = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default Meal;
