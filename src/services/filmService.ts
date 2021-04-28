import axios from 'axios'
import { Film } from '../types/film.type'

export const filmService = {
    getFilms,
    saveFilmToStorage,
    loadFilmFromStorage
}

async function getFilms(): Promise<Film[]> {
    const films = await axios.get('https://swapi.dev/api/films/')
    return films.data.results
}

function saveFilmToStorage(key: string, film: Film): void | string {
    let favoriteFilms: Film[] = loadFilmFromStorage(key) ? loadFilmFromStorage(key) : []
    const isFilmFavorite: boolean = favoriteFilms.some(filmToFind => filmToFind.episode_id === film.episode_id)
    if (isFilmFavorite) return `${film.title} is already a favorite film`;
    favoriteFilms = [film, ...favoriteFilms]
    localStorage.setItem(key, JSON.stringify(favoriteFilms))
}

function loadFilmFromStorage(key: string) {
    const item = localStorage.getItem(key);
    const val = item ? JSON.parse(item) : null
    return val;
}

