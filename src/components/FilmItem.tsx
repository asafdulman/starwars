import { Film } from "../types/film.type";

interface FilmItemProps {
    film: Film;
    selectFilm: (film: Film) => void
}

export function FilmItem({ film, selectFilm }: FilmItemProps) {

    return (
        <div className="film-item-box" onClick={() => selectFilm(film)}>
            <p>{film.title}</p>
        </div>
    )
}