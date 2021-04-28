import { Film } from "../types/film.type";

interface FilmPreviewProps {
    film: Film;
    addToFavorites: (film: Film) => void | undefined
}


export function FilmPreview({ film, addToFavorites }: FilmPreviewProps) {
    return (
        <div className="film-preview-box">
            <h1>{film.title}</h1>
            <p>{film.opening_crawl}</p>
            <button onClick={() => addToFavorites(film)}>Add to favorites</button>
        </div>
    )
}
