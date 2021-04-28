import { Film } from "../types/film.type";

interface Props {
    film: Film;
    addToFavorites: (film: Film) => void | undefined
}


export function FilmPreview({ film, addToFavorites }: Props) {
    return (
        <div className="film-preview-box">
            <h1>{film.title}</h1>
            <p>{film.opening_crawl}</p>
            <button onClick={() => addToFavorites(film)}>Add to favorites</button>
        </div>
    )
}
