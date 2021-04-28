import { Film } from "../types/film.type";

interface Props {
    film: Film;
}


export function FilmPreview({ film }: Props) {
    return (
        <div className="film-preview-box">
            <h1>{film.title}</h1>
            <p>{film.opening_crawl}</p>
        </div>
    )
}
