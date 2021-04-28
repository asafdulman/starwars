import { Film } from "../types/film.type";

interface Props {
    film: Film;
}

export function FavoriteFilm({ film }: Props) {
    return (
        <div className="favorite-film-box">
            <h3>{film.title}</h3>
        </div>
    )
}
