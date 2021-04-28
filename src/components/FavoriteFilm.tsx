import { Film } from "../types/film.type";

interface FavoriteFilmProps {
    film: Film;
}

export function FavoriteFilm({ film }: FavoriteFilmProps) {
    return (
        <div className="favorite-film-box">
            <h3>{film.title}</h3>
        </div>
    )
}
