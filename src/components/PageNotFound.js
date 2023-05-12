import React from 'react';
import styles from './PageNotFound.module.css';
import { Link } from 'react-router-dom';
import dogPicture from '../assets/images/webp/donation-dog.webp';
import path from '../constants/path';

const PageNotFound = () => {

    return (
        <div className={styles.pageContainer}>
            <img src={dogPicture} alt="error page" />
            <h3 className={styles.title}>Oops, something went wrong</h3>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to={path.homepage}>
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
