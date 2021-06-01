import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem/CartItem';
import styles from './style/Cart.module.css';
const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {};
    const cartItemAddHandler = (item) => {};
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                ></CartItem>
            ))}
        </ul>
    );

    return (
        <Modal onShowCart={props.onShowCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button
                    onClick={props.onShowCart}
                    className={styles['button--alt']}
                >
                    Close
                </button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
};
export default Cart;
