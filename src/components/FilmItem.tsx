import { Film } from "../types/film.type";

interface Props {
    film: Film;
}

export function FilmItem({ film }: Props) {

    return (
        <div>
            <p>{film.title}</p>
        </div>
    )
}