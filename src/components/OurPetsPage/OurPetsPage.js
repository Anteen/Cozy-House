import React from 'react';
import styles from './OurPetsPage.module.scss';
import PetsPaginate from './PetsPaginate';

const OurPetsPage = ({ petsList }) => {
    
    return (
        <main className={styles.wrapper}>
            <div className="container">
                <h3 className={styles.title}>
                    Our friends who <span>are looking for a house</span>
                </h3>
                <PetsPaginate petsList={petsList} />
            </div>
        </main>
    );
};

export default OurPetsPage;
