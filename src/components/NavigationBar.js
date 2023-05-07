import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from '../styles/NavigationBar.module.css';
import burgerImage from '../assets/images/burger.svg';
import burgerImageBlack from '../assets/images/burger-black.svg';
import path from '../constants/path';

const NavigationBar = ({ setActiveBurgerMenu }) => {
    
    const location = useLocation();

    return (
        <nav
            className={
                location.pathname === path.ourPetsPage
                    ? `${styles.wrapper} ${styles.ourPetsWrapper}`
                    : styles.wrapper
            }
        >
            <Link to={path.homepage} style={{ textDecoration: 'none', outline: 'none' }}>
                <button className={styles.homeButton}>
                    <h1 className={styles.title}>Cozy House</h1>
                    <h2 className={styles.subtitle}>
                        Shelter for pets in Boston
                    </h2>
                </button>
            </Link>
            <ul className={styles.navigationWrapper}>
                <li>
                    <Link to={path.homepage}>
                        <button
                            className={
                                location.pathname === path.homepage
                                    ? `${styles.button} ${styles.buttonActive}`
                                    : styles.button
                            }
                        >
                            About the shelter
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={path.ourPetsPage}>
                        <button
                            className={
                                location.pathname === path.ourPetsPage
                                    ? `${styles.button} ${styles.buttonActive}`
                                    : styles.button
                            }
                        >
                            Our pets
                        </button>
                    </Link>
                </li>
                <li>
                    <button className={styles.button}>Help the shelter</button>
                </li>
                <li>
                    <button className={styles.button}>Contacts</button>
                </li>
            </ul>
            <button
                className={styles.burger}
                onClick={() => setActiveBurgerMenu(true)}
            >
                {location.pathname === path.ourPetsPage ? (
                    <img src={burgerImageBlack} />
                ) : (
                    <img src={burgerImage} />
                )}
            </button>
        </nav>
    );
};

export default NavigationBar;
