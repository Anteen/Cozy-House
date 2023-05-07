import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import OurPetsPage from './components/OurPetsPage/OurPetsPage';
import NavigationBar from './components/NavigationBar';
import FooterBlock from './components/FooterBlock';
import path from './constants/path';
import BurgerMenu from './BurgerMenu';
import axios from 'axios';
import { catsApi, dogsApi } from './services/api';
import Preloader from './Preloader';

const App = () => {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const [petsList, setPetsList] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const catsResponse = await axios.request(catsApi);
                const catsData = catsResponse.data;
                const catsList = catsData.map((cat) => {
                    return { name: cat.breed, image: cat.img };
                });

                const catsListLimited = catsList.slice(0, 40);

                const dogsResponse = await axios.request(dogsApi);
                const dogsData = dogsResponse.data;
                const dogsList = dogsData.map((dog) => {
                    return { name: dog.breed, image: dog.img };
                });
                const dogsListLimited = dogsList.slice(0, 40);

                const petsListCombined = [
                    ...catsListLimited,
                    ...dogsListLimited,
                ];
                petsListCombined.sort(() => Math.random() - 0.5);

                setPetsList(petsListCombined);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPets();
    }, []);

    if (!petsList || petsList.length === 0) {
        return <Preloader />;
    }
    return (
        <div className="App">
            <Router>
                <header className="header">
                    <div className="container">
                        <NavigationBar
                            setActiveBurgerMenu={setActiveBurgerMenu}
                        />
                    </div>
                </header>
                <Routes>
                    <Route
                        path={path.homepage}
                        element={<Homepage petsList={petsList} />}
                    />
                    <Route
                        path={path.ourPetsPage}
                        element={<OurPetsPage petsList={petsList} />}
                    />
                </Routes>
                <footer>
                    <FooterBlock />
                </footer>
                <BurgerMenu
                    activeBurgerMenu={activeBurgerMenu}
                    setActiveBurgerMenu={setActiveBurgerMenu}
                />
            </Router>
        </div>
    );
};

export default App;
