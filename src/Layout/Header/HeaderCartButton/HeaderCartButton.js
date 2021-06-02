import { useContext, useEffect, useState } from 'react';

import React from 'react';
import CartIcon from '../../../components/Cart/CartIcon';
import CartContext from '../../../store/cart-context';
import styles from './style/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnAnimated, setBtnAnimated] = useState(false);
    const cartContext = useContext(CartContext);
    const { items } = cartContext;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnAnimated ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnimated(true);
        const timer = setTimeout(() => {
            setBtnAnimated(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button onClick={props.onShowCart} className={btnClasses}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
