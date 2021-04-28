import './App.css';
import { useEffect, useState } from 'react';
import { filmService } from './services/filmService';
import { Film } from './types/film.type';
import { FilmItem } from './components/FilmItem';

function App() {

  const [films, setFilms] = useState<Film[] | null>()

  useEffect(() => {
    getFilmsFromService()
  }, [])

  const getFilmsFromService = async () => {
    const films = await filmService.getFilms()
    setFilms(films)
  }


  return (
    <div className="app">
      {films?.map(film => <FilmItem key={film.episode_id} film={film} />)}
    </div>
  );
}

export default App;
