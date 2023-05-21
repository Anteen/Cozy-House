import React from 'react';
import styles from './PetsSlider.module.css';
import Slider from 'react-slick';
import '../../styles/SlickSlider/slick.css';
import '../../styles/SlickSlider/slick-theme.css';
import PetCard from '../PetCard';
import sliderSettings from '../../utilites/sliderSettings';

const PetsSlider = ({ petsList }) => {
    
    const shortPetsList = petsList.slice(0, 6);  

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <h3 className={styles.title}>
                        Our friends who <br /> are looking for a house
                    </h3>
                    <Slider {...sliderSettings} className={styles.homeSlider}>
                        {shortPetsList.map((pet, index) => {
                            return (
                                <PetCard
                                    {...pet}
                                    key={index}
                                    name={pet.name}
                                    image={pet.image}
                                />
                            );
                        })}
                    </Slider>
                    <button className={styles.button}>
                        Get to know the rest
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetsSlider;
