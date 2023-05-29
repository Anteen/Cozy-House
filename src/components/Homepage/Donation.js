import React from 'react';
import styles from './Donation.module.scss';
import donationDog from '../../assets/images/webp/donation-dog.webp';
import creditCard from '../../assets/images/credit-card.svg'

const Donation = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <img src={donationDog} className={styles.dogImage} alt='puppy'/>
                    <div className={styles.descriptionWrapper}>
                        <h3 className={styles.title}>
                            You can also <br/> make a donation
                        </h3>
                        <p className={styles.subtitle}>
                            Name of the bank / Type of bank account
                        </p>
                        <button className={styles.button}>
                            <img src={creditCard} alt='credit card'/>
                            <h4 className={styles.number}>8380 2880 8028 8791 7435</h4>
                        </button>
                        <p className={styles.smallText}>
                            Legal information and lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Maecenas a ipsum at
                            libero sagittis dignissim sed ac diam. Praesent
                            ultrices maximus tortor et vulputate. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donation;
