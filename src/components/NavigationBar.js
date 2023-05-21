import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from './NavigationBar.module.scss';
import burgerImage from '../assets/images/burger.svg';
import burgerImageBlack from '../assets/images/burger-black.svg';
import Pathes from '../constants/Pathes';

const NavigationBar = ({ setActiveBurgerMenu, setIsNotFound }) => {
    const location = useLocation();

    useEffect(() => {
        const changeStyles = () => {
            if (location.pathname === Pathes.notFoundPage) {
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
                location.pathname === Pathes.ourPetsPage
                    ? `${styles.wrapper} ${styles.ourPetsWrapper}`
                    : location.pathname === Pathes.notFoundPage
                    ? `${styles.wrapper} ${styles.notFoundWrapper}`
                    : styles.wrapper
            }
        >
            <Link
                to={Pathes.homePage}
                style={{ textDecoration: 'none', outline: 'none' }}
            >
                <button className={styles.homeButton}>
                    <h2 className={styles.title}>Cozy House</h2>
                    <h1 className={styles.subtitle}>
                        Shelter for pets in Boston
                    </h1>
                </button>
            </Link>
            <ul className={styles.navigationWrapper}>
                <li>
                    <Link to={Pathes.homePage}>
                        <button
                            className={
                                location.pathname === Pathes.homePage
                                    ? `${styles.button} ${styles.buttonActive} ${styles.homePageActive}`
                                    : styles.button
                            }
                        >
                            About the shelter
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={Pathes.ourPetsPage}>
                        <button
                            className={
                                location.pathname === Pathes.ourPetsPage
                                    ? `${styles.button} ${styles.buttonActive} ${styles.ourPetsPageActive}`
                                    : styles.button
                            }
                        >
                            Our pets
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={Pathes.notFoundPage}>
                        <button
                            className={
                                location.pathname === Pathes.helpingPage
                                    ? `${styles.button} ${styles.buttonActive} ${styles.helpingPageActive}`
                                    : styles.button
                            }
                        >
                            Help the shelter
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to={Pathes.notFoundPage}>
                        <button
                            className={
                                location.pathname === Pathes.contactsPage
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
                {location.pathname === Pathes.ourPetsPage ? (
                    <img src={burgerImageBlack} />
                ) : (
                    <img src={burgerImage} />
                )}
            </button>
        </nav>
    );
};

export default NavigationBar;
