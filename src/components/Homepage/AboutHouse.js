import React from 'react';
import styles from './AboutHouse.module.css';
import aboutPets from '../../assets/images/webp/about-pets.webp';

function AboutHouse() {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <img src={aboutPets} alt='dog image'/>
                    <div className={styles.textContentWrapper}>
                        <h3 className={styles.title}>About the shelter <br/> “Cozy House”</h3>
                        <p className={styles.text}>
                            Currently we have 121 dogs and 342 cats on our hands
                            and statistics show that only 20% of them will find
                            a family. The others will continue to live with us
                            and will be waiting for a lucky chance to become
                            dearly loved.
                        </p>
                        <p className={styles.text}>
                            We feed our wards with the best food and make sure
                            that they do not get sick, feel comfortable
                            (including psychologically) and well. We are
                            supported by 87 volunteers and 28 employees of
                            various skill levels. About 12% of the animals are
                            taken by the shelter staff. Taking care of the
                            animals, they become attached to the pets and would
                            hardly ever leave them alone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutHouse;
