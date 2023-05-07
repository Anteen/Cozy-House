import React from 'react';
import styles from '../../styles/FooterContent.module.css';

const FooterContent = ({ title, firstIcon, address, secondIcon, contacts }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.linksWrapper}>
                <img src={firstIcon} />
                <p>{address}</p>
            </div>
            <div className={styles.linksWrapper}>
                <img src={secondIcon} />
                <p>{contacts}</p>
            </div>
        </div>
    );
};

export default FooterContent;
