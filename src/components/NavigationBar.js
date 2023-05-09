import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from '../styles/NavigationBar.module.css';
import burgerImage from '../assets/images/burger.svg';
import burgerImageBlack from '../assets/images/burger-black.svg';
import path from '../constants/path';

const NavigationBar = ({ setActiveBurgerMenu, setIsNotFound }) => {
    const location = useLocation();

    useEffect(() => {
        const changeStyles = () => {
            if (location.pathname === path.notFoundPage) {
                setIsNotFound(true);
            } else {
                setIsNotFound(false);
            }
        };
        changeStyles();
    }, [location]);

    return (
        <nav
            className={
                location.pathname === path.ourPetsPage
                    ? `${styles.wrapper} ${styles.ourPetsWrapper}`
                    : location.pathname === path.notFoundPage
                    ? `${styles.wrapper} ${styles.notFoundWrapper}`
                    : styles.wrapper
            }
        >
            <Link
                to={path.homepage}
                style={{ textDecoration: 'none', outline: 'none' }}
            >
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
                                    ? `${styles.button} ${styles.buttonActive} ${styles.homepageActive}`
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
                                    ? `${styles.button} ${styles.buttonActive} ${styles.ourPetsPageActive}`
                                    : styles.button
                            }
                        >
                            Our pets
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={path.notFoundPage}>
                        <button
                            className={
                                location.pathname === path.helpingPage
                                    ? `${styles.button} ${styles.buttonActive} ${styles.helpingPageActive}`
                                    : styles.button
                            }
                        >
                            Help the shelter
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={path.notFoundPage}>
                        <button
                            className={
                                location.pathname === path.contactsPage
                                    ? `${styles.button} ${styles.buttonActive} ${styles.contactsPageActive}`
                                    : styles.button
                            }
                        >
                            Contacts
                        </button>
                    </Link>
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
