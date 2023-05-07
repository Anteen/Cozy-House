import React from 'react';
import AboutHouse from '../Homepage/AboutHouse';
import PetsSlider from '../Homepage/PetsSlider';
import HelpShelter from '../Homepage/HelpShelter';
import Donation from '../Homepage/Donation';
import StartScreen from './StartScreen';

const Homepage = ({ petsList }) => {
    
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

export default Homepage;
