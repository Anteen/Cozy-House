import React from 'react';
import styles from './FooterBlock.module.css';
import footerDog from '../assets/images/webp/footer-puppy.webp';
import footerData from '../data/footerData';
import FooterContent from './Homepage/FooterContent'

function FooterBlock() {
    
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <img src={footerDog} className={styles.dogImage} alt='dog image'/>
                <div className={styles.contentWrapper}>
                    {footerData.map((el, index) => {
                        return (
                          <FooterContent
                              {...el}
                              key={index}
                              title={el.title}
                              firstIcon={el.firstIcon}
                              address={el.address}
                              secondIcon={el.secondIcon}
                              contacts={el.contacts}
                          />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default FooterBlock;
