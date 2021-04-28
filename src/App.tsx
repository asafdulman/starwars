import './App.css';
import { useEffect, useState } from 'react';
import { filmService } from './services/filmService';
import { Film } from './types/film.type';
import { FilmItem } from './components/FilmItem';
import { FilmPreview } from './components/FilmPreview';

function App() {

  const [films, setFilms] = useState<Film[] | null>()
  const [selectedFilm, setSelectedFilm] = useState<Film | null>()

  useEffect(() => {
    getFilmsFromService()
  }, [])

  const getFilmsFromService = async () => {
    const films = await filmService.getFilms()
    setFilms(films)
  }

  const selectFilm = (film: Film): void => {
    setSelectedFilm(film)
  }


  return (
    <div className="app">
      {films?.map(film => <FilmItem key={film.episode_id} film={film} selectFilm={selectFilm} />)}
      {selectedFilm && <FilmPreview film={selectedFilm} />}
    </div>
  );
}

export default App;
