import React from 'react';
import AboutHouse from './AboutHouse';
import PetsSlider from './PetsSlider';
import HelpShelter from './HelpShelter';
import Donation from './Donation';
import StartScreen from './StartScreen';

const HomePage = ({ petsList }) => {
    
    return (
        <main>
            <StartScreen />
            <AboutHouse />
            <PetsSlider petsList={petsList} />
            <HelpShelter />
            <Donation />
        </main>
    );
};

export default HomePage;
