import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/DefaultStyles.css';
import styles from './App.module.css';
import { fetchPets } from './utilites/fetchPets';
import HomePage from './components/HomePage/HomePage';
import OurPetsPage from './components/OurPetsPage/OurPetsPage';
import NavigationBar from './components/NavigationBar';
import FooterBlock from './components/FooterBlock';
import Pathes from './constants/Pathes';
import BurgerMenu from './components/BurgerMenu';
import Preloader from './components/Preloader';
import PageNotFound from './components/PageNotFound';

const App = () => {
    const [activeBurgerMenu, setActiveBurgerMenu] = useState(false);
    const [petsList, setPetsList] = useState([]);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const petsListCombined = await fetchPets();
            setPetsList(petsListCombined);
        };

        fetchData();
    }, []);

    if (!petsList || !petsList.length) {
        return <Preloader />;
    }

    return (
        <div className={styles.app}>
            <Router>
                {!isNotFound ? (
                    <header className={styles.header}>
                        <div className="container">
                            <NavigationBar
                                setActiveBurgerMenu={setActiveBurgerMenu}
                                setIsNotFound={setIsNotFound}
                            />
                        </div>
                    </header>
                ) : null}
                <Routes>
                    <Route
                        path={Pathes.homePage}
                        element={<HomePage petsList={petsList} />}
                    />
                    <Route
                        path={Pathes.ourPetsPage}
                        element={<OurPetsPage petsList={petsList} />}
                    />
                    <Route
                        path={Pathes.notFoundPage}
                        element={<PageNotFound setIsNotFound={setIsNotFound} />}
                    />
                </Routes>
                {!isNotFound ? (
                    <footer>
                        <FooterBlock />
                    </footer>
                ) : null}
                <BurgerMenu
                    activeBurgerMenu={activeBurgerMenu}
                    setActiveBurgerMenu={setActiveBurgerMenu}
                />
            </Router>
        </div>
    );
};

export default App;
