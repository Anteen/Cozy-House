const API_KEY = '343b8a7074msh6ebdaf451332a0ep12e423jsn77c3312e4d15';

export const catsApi = {
    crossorigin: true,
    mode: 'no-cors',
    method: 'GET',
    url: 'https://cat-breeds.p.rapidapi.com/cat_breeds?',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'cat-breeds.p.rapidapi.com',
    },
};
export const dogsApi = {
    crossorigin: true,
    mode: 'no-cors',
    method: 'GET',
    url: 'https://dog-breeds2.p.rapidapi.com/dog_breeds?',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com',
    },
};
