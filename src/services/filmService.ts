import axios from 'axios'

export const filmService = {
    getFilms
}

async function getFilms(): Promise<any> {
    const films = await axios.get('https://swapi.dev/api/films/')
    return films.data.results
}

