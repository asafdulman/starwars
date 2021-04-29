import { useEffect, useState } from "react"
import { FAVORITE_FILMS_KEY } from "../constants"
import { filmService } from "../services/filmService"
import { Film } from "../types/film.type"
import { FavoriteFilm } from "./FavoriteFilm"

interface FavoritesModalProps {
    setIsFavoritesModalOpen: (value: boolean) => void
}

export function FavoritesModal({ setIsFavoritesModalOpen }: FavoritesModalProps) {

    const [favoriteFilms, setFavoriteFilms] = useState<Film[] | null>(null)

    useEffect(() => {
        getFavoritesFilms()
    }, [])


    const getFavoritesFilms = () => {
        const favoriteilms = filmService.loadFilmFromStorage(FAVORITE_FILMS_KEY)
        setFavoriteFilms(favoriteilms)
    }

    const removeFavoriteFilm = (film: Film): void => {
        const films = filmService.removeFilmFromStorage(FAVORITE_FILMS_KEY, film)
        setFavoriteFilms(films)
    }

    return (
        <div>
            {<div className="favorites-modal-box">
                <h1>My Favorite Films</h1>
                <div className="modal-films-list">
                    {favoriteFilms?.length === 0 ? <p>You have no favorite films.</p> : favoriteFilms?.map(film => <FavoriteFilm
                        key={film.episode_id}
                        film={film}
                        removeFavoriteFilm={removeFavoriteFilm} />)}
                </div>
                <i onClick={() => setIsFavoritesModalOpen(false)} className="fas close-modal-btn fa-times"></i>
            </div>}

        </div>
    )
}
