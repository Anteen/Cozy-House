import React from 'react';
import styles from './HelpShelter.module.scss';
import helpingData from '../../data/helpingData';
import HelpingCard from './HelpingCard'

const HelpShelter = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <h3 className={styles.title}>How you can help <br/> our shelter</h3>
                    <div className={styles.cardWrapper}>
                        {helpingData.map((el) => {
                            return (
                                <HelpingCard
                                    key={el.id}
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
