import axios from 'axios';
import { catsApi, dogsApi } from '../services/api';

export const fetchPets = async () => {
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

        const petsListCombined = [...catsListLimited, ...dogsListLimited];
        petsListCombined.sort(() => Math.random() - 0.5);

        return petsListCombined;
    } catch (error) {
        console.error(error);
        return [];
    }
};
