import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import './BurgerMenu.css';
import path from './constants/path';
import closeButton from './assets/images/close-lg-svgrepo-com.svg';

const burgerMenuElement = document.querySelector('#burger-menu');

const BurgerMenu = ({ activeBurgerMenu, setActiveBurgerMenu }) => {
    const element = document.createElement('div');

    useEffect(() => {
        if (activeBurgerMenu) {
            burgerMenuElement.appendChild(element);

            return () => {
                burgerMenuElement.removeChild(element);
            };
        }
    });

    useEffect(() => {
        if (activeBurgerMenu) {
            document.body.classList.add('blockBodyScroll');
        } else {
            document.body.classList.remove('blockBodyScroll');
        }
        return () => {
            document.body.classList.remove('blockBodyScroll');
        };
    }, [activeBurgerMenu]);

    if (activeBurgerMenu) {
        return reactDom.createPortal(
            <div className="modalOverlay">
                <div className="burgerActive">
                    <button
                        className="closeButton"
                        onClick={() => setActiveBurgerMenu(false)}
                    >
                        <img src={closeButton} />
                    </button>
                    <ul className="navigationWrapper">
                        <li>
                            <Link
                                to={path.homepage}
                                style={{
                                    textDecoration: 'none',
                                    outline: 'none',
                                }}
                            >
                                <button
                                    className="button"
                                    onClick={() => setActiveBurgerMenu(false)}
                                >
                                    About <br /> the shelter
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={path.ourPetsPage}
                                style={{
                                    textDecoration: 'none',
                                    outline: 'none',
                                }}
                            >
                                <button
                                    className="button"
                                    onClick={() => setActiveBurgerMenu(false)}
                                >
                                    Our pets
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={path.notFoundPage}
                                style={{
                                    textDecoration: 'none',
                                    outline: 'none',
                                }}
                            >
                                <button
                                    className="button"
                                    onClick={() => setActiveBurgerMenu(false)}
                                >
                                    Help <br /> the shelter
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={path.notFoundPage}
                                style={{
                                    textDecoration: 'none',
                                    outline: 'none',
                                }}
                            >
                                <button
                                    className="button"
                                    onClick={() => setActiveBurgerMenu(false)}
                                >
                                    Contacts
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>,
            element,
        );
    }

    return null;
};

export default BurgerMenu;
