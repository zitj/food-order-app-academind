import React from 'react';
import CartIcon from '../../../components/Cart/CartIcon';
import styles from './style/HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;
