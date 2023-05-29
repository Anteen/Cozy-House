import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';
import './BurgerMenu.scss';
import Pathes from '../constants/Pathes';
import closeButton from '../assets/images/close-lg-svgrepo-com.svg';

const BurgerMenu = ({ activeBurgerMenu, setActiveBurgerMenu }) => {
    const burgerMenuElementRef = useRef(null);

    useEffect(() => {
        burgerMenuElementRef.current = document.querySelector('#burger-menu');
    }, []);

    const element = document.createElement('div');

    useEffect(() => {
        if (activeBurgerMenu) {
            burgerMenuElementRef.current.appendChild(element);

            return () => {
                burgerMenuElementRef.current.removeChild(element);
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
                                to={Pathes.homePage}
                                className="link"
                                onClick={() => setActiveBurgerMenu(false)}
                            >
                                About <span>the shelter</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Pathes.ourPetsPage}
                                className="link"
                                onClick={() => setActiveBurgerMenu(false)}
                            >
                                Our pets
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Pathes.notFoundPage}
                                className="link"
                                onClick={() => setActiveBurgerMenu(false)}
                            >
                                <span>Help</span>
                                <span>the shelter</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={Pathes.notFoundPage}
                                className="link"
                                onClick={() => setActiveBurgerMenu(false)}
                            >
                                Contacts
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
