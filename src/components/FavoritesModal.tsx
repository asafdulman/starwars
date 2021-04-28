import { useEffect, useState } from "react"
import { filmService } from "../services/filmService"
import { Film } from "../types/film.type"
import { FavoriteFilm } from "./FavoriteFilm"

export function FavoritesModal() {

    const [films, setFilms] = useState<Film[] | null>(null)

    useEffect(() => {
        getFavoritesFilms()
    }, [])

    const getFavoritesFilms = () => {
        const favoriteilms = filmService.loadFilmsFromStorage('favoriteFilms')
        setFilms(favoriteilms)
    }

    return (
        <div className="favorites-modal-box">
            {films?.map(film => <FavoriteFilm key={film.episode_id} film={film} />)}
        </div>
    )
}
