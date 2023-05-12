import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { catsApi, dogsApi } from './services/api';
import axios from 'axios';
import Homepage from './components/Homepage/Homepage';
import OurPetsPage from './components/OurPetsPage/OurPetsPage';
import NavigationBar from './components/NavigationBar';
import FooterBlock from './components/FooterBlock';
import path from './constants/path';
import BurgerMenu from './components/BurgerMenu';
import Preloader from './components/Preloader';
import PageNotFound from './components/PageNotFound';

const App = () => {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const [petsList, setPetsList] = useState([]);
    const [isNotFound, setIsNotFound] = useState(false);

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
                <header
                    className="header"
                    style={isNotFound ? { display: 'none' } : null}
                >
                    <div className="container">
                        <NavigationBar
                            setActiveBurgerMenu={setActiveBurgerMenu}
                            setIsNotFound={setIsNotFound}
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
                    <Route
                        path={path.notFoundPage}
                        element={<PageNotFound />}
                    />
                </Routes>
                <footer style={isNotFound ? { display: 'none' } : null}>
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
