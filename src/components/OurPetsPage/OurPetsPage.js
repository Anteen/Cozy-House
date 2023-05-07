import React from 'react';
import styles from '../../styles/OurPetsPage.module.css';
import PetsPaginate from './PetsPaginate';

const OurPetsPage = ({ petsList }) => {
    
    return (
        <main className={styles.wrapper}>
            <div className="container">
                <h3 className={styles.title}>
                    Our friends who <br /> are looking for a house
                </h3>
                <PetsPaginate petsList={petsList} />
            </div>
        </main>
    );
};

export default OurPetsPage;
