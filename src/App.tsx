import './App.css';
import { useEffect, useState } from 'react';
import { filmService } from './services/filmService';
import { Film } from './types/film.type';
import { FilmItem } from './components/FilmItem';
import { FilmPreview } from './components/FilmPreview';
import { FavoritesModal } from './components/FavoritesModal';
import { ErrorMessage } from './components/ErrorMessage';

function App() {

  const [films, setFilms] = useState<Film[] | null>()
  const [selectedFilm, setSelectedFilm] = useState<Film | null>()
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false)
  const [errorMessageModalOpen, setErrorMessageModalOpen] = useState<string | undefined>('')

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

  const addToFavorites = (film: Film): void => {
    const errorMessage = filmService.saveFilmToStorage('favoriteFilms', film)
    if (errorMessage) {
      setErrorMessageModalOpen(errorMessage)
      setTimeout(() => {
        setErrorMessageModalOpen('')
      }, 3000)
    } 
  }

  return (
    <div className="app">
      <button className="show-favorites-films-btn" onClick={() => { setIsFavoritesModalOpen(!isFavoritesModalOpen) }}>My Favorite Films</button>
      {isFavoritesModalOpen && <FavoritesModal />}
      {films?.map(film => <FilmItem key={film.episode_id} film={film} selectFilm={selectFilm} />)}
      {selectedFilm && <FilmPreview film={selectedFilm} addToFavorites={addToFavorites} />}
      {errorMessageModalOpen && <ErrorMessage filmTitle={errorMessageModalOpen} />}
    </div>
  );
}

export default App;
