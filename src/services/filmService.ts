import axios from 'axios'
import { Film } from '../types/film.type'
import { UserMessage } from '../types/userMessage.type'

export const filmService = {
    getFilms,
    addFilmToStorage,
    removeFilmFromStorage,
    loadFilmFromStorage
}

async function getFilms(): Promise<Film[]> {
    const films = await axios.get('https://swapi.dev/api/films/')
    return films.data.results
}

function addFilmToStorage(key: string, film: Film): UserMessage {
    let favoriteFilms: Film[] = loadFilmFromStorage(key) ? loadFilmFromStorage(key) : []
    const isFilmFavorite: boolean = favoriteFilms.some(filmToFind => filmToFind.episode_id === film.episode_id)
    if (isFilmFavorite) return { message: `${film.title} is already a favorite film`, status: 'error' };
    favoriteFilms = [film, ...favoriteFilms]
    localStorage.setItem(key, JSON.stringify(favoriteFilms))
    return { message: `${film.title} has added to your favorite films!`, status: 'success' };
}

function removeFilmFromStorage(key: string, film: Film): Film[] {
    let films: Film[] = loadFilmFromStorage(key)
    films = films.filter(filmToFind => filmToFind.episode_id !== film.episode_id)
    localStorage.setItem(key, JSON.stringify(films))
    return films
}

function loadFilmFromStorage(key: string) {
    const films = localStorage.getItem(key);
    const value = films ? JSON.parse(films) : null
    return value;
}

