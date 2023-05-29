import React from 'react';
import styles from './PageNotFound.module.scss';
import { Link } from 'react-router-dom';
import dogPicture from '../assets/images/webp/donation-dog.webp';
import Pathes from '../constants/Pathes';

const PageNotFound = ( {setIsNotFound} ) => {

    return (
        <div className={styles.pageContainer}>
            <img src={dogPicture} alt="error page" />
            <h3 className={styles.title}>Oops, something went wrong</h3>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to={Pathes.homePage} onClick={() => setIsNotFound(false)}>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
