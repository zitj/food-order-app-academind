import React from 'react';
import MealItemForm from './MealItemForm/MealItemForm';
import styles from './style/Meal.module.css';

const Meal = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};

export default Meal;
