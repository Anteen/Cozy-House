import React from 'react';
import styles from './FooterContent.module.scss';

const FooterContent = ({ title, firstIcon, address, secondIcon, contacts }) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.linksWrapper}>
                <img src={firstIcon} alt='address'/>
                <p>{address}</p>
            </div>
            <div className={styles.linksWrapper}>
                <img src={secondIcon} alt='contacts'/>
                <p>{contacts}</p>
            </div>
        </div>
    );
};

export default FooterContent;
