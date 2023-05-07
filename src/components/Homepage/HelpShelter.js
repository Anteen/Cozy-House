import React from 'react';
import styles from '../../styles/HelpShelter.module.css';
import helpingData from '../../data/helpingData';
import HelpingCard from '../Homepage/HelpingCard'

const HelpShelter = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <h3 className={styles.title}>How you can help <br/> our shelter</h3>
                    <div className={styles.cardWrapper}>
                        {helpingData.map((el, index) => {
                            return (
                                <HelpingCard
                                    key={index}
                                    {...el}
                                    image={el.image}
                                    title={el.title}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpShelter;
