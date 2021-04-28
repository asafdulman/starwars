import { Film } from "../types/film.type";

interface Props {
    film: Film;
    selectFilm: (film: Film) => void
}

export function FilmItem({ film, selectFilm }: Props) {

    return (
        <div className="film-item-box" onClick={() => selectFilm(film)}>
            <p>{film.title}</p>
        </div>
    )
}