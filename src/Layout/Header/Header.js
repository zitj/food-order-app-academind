import React, { Fragment } from 'react';
import mealsImage from '../../assets/meals1.jpg';
import HeaderCartButton from './HeaderCartButton/HeaderCartButton';
import styles from './style/Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;
