import axios from 'axios'
import { Film } from '../types/film.type'

export const filmService = {
    getFilms,
    saveFilmToStorage,
    loadFilmsFromStorage
}

async function getFilms(): Promise<any> {
    const films = await axios.get('https://swapi.dev/api/films/')
    return films.data.results
}

function saveFilmToStorage(key: string, film: Film): void | string {
    let favoriteFilms: Film[] | [] = loadFilmsFromStorage(key) ? loadFilmsFromStorage(key) : []
    const isFilmFavorite: boolean = favoriteFilms.some(filmToFind => filmToFind.episode_id === film.episode_id)
    if (isFilmFavorite) return `${film.title}`;
    favoriteFilms = [film, ...favoriteFilms]
    localStorage.setItem(key, JSON.stringify(favoriteFilms))
}

function loadFilmsFromStorage(key: string) {
    var item = localStorage.getItem(key);
    var val = item ? JSON.parse(item) : null
    return val;
}

