import { Film } from "../types/film.type";

interface FavoriteFilmProps {
    film: Film;
    removeFavoriteFilm: (film: Film) => void
}

export function FavoriteFilm({ film, removeFavoriteFilm }: FavoriteFilmProps) {
    return (
        <div className="favorite-film-box">
            <h3>{film.title}</h3>
            <button className="remove-film-btn" onClick={() => removeFavoriteFilm(film)}>Delete</button>
        </div>
    )
}
