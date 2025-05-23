import axios from 'axios'

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
});

export const buscarPokemon = async (limit = 20, offset = 0) => {
    try{
        const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
        return response.data.results;

    }catch (error) {
        console.log(error);
        return [];
    }
};