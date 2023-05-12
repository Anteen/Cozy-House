import React from 'react';
import styles from './StartScreen.module.css';
import headerDog from '../../assets/images/webp/start-screen-puppy.webp';

const StartScreen = () => {
    
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <img src={headerDog} className={styles.dogImage} alt='cute puppy'/>
                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>
                        Not only people <br /> need a house
                    </h2>
                    <p className={styles.subtitle}>
                        We offer to give a chance to a little and nice puppy
                        with an extremely wide and open heart. He or she will
                        love you more than anybody else in the world, you will
                        see!
                    </p>
                    <button className={styles.button}>Make a friend</button>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;
