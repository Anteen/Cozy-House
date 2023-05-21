import React from 'react';
import styles from './PetCard.module.css';
import defaultImage from '../assets/images/webp/dog-and-cat.webp';

const PetCard = ({ name, image }) => {
    
    return (
        <div className={styles.wrapper}>
            {image === 'Not found' || image === 'Not available' ? (
                <div className={styles.defaultImage}>
                    <img src={defaultImage} alt='cat and dog image' />
                </div>
            ) : (
                <div
                    className={styles.image}
                    style={{ background: `url(${image})` }}
                ></div>
            )}
            <h4 className={styles.title}>{name}</h4>
            <button className={styles.button}>Learn more</button>
        </div>
    );
};

export default PetCard;
