import React from 'react';
import styles from './PetsSlider.module.css';
import Slider from 'react-slick';
import '../../styles/SlickSlider/slick.css';
import '../../styles/SlickSlider/slick-theme.css';
import PetCard from '../PetCard';

const PetsSlider = ({ petsList }) => {
    
    const shortPetsList = petsList.slice(0, 6);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

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
