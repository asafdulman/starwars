import './assets/scss/global.scss';
import { useEffect, useState } from 'react';
import { filmService } from './services/filmService';
import { Film } from './types/film.type';
import { FilmItem } from './components/FilmItem';
import { FilmPreview } from './components/FilmPreview';
import { FavoritesModal } from './components/FavoritesModal';
import { ErrorMessage } from './components/ErrorMessage';
import { FAVORITE_FILMS_KEY } from './constans';
import logo from './assets/img/logo.png';

function App() {

  const [films, setFilms] = useState<Film[] | null>()
  const [selectedFilm, setSelectedFilm] = useState<Film | null>()
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | undefined>('')

  useEffect(() => {
    getFilmsFromService()
  }, [])

  const getFilmsFromService = async () => {
    const films = await filmService.getFilms()
    setFilms(films)
  }

  const selectFilm = (film: Film): void => setSelectedFilm(film)

  const renderFavoritesButton = () => {
    return <button className="show-favorites-films-btn" onClick={() => setIsFavoritesModalOpen(!isFavoritesModalOpen)}>My Favorite Films</button>
  }

  const renderLogoImg = () => {
    return <img className="logo-img" src={logo} alt="" />
  }

  const addToFavorites = (film: Film): void => {
    const errorMessage = filmService.saveFilmToStorage(FAVORITE_FILMS_KEY, film)
    if (errorMessage) {
      setErrorMessage(errorMessage)
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }

  return (
    <div className="app">
      {renderLogoImg()}
      {renderFavoritesButton()}
      {isFavoritesModalOpen && <FavoritesModal />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="main-container">
        <div className="film-table-list-box">
          {films?.map(film => <FilmItem key={film.episode_id} film={film} selectFilm={selectFilm} />)}
        </div>
        {selectedFilm && <FilmPreview film={selectedFilm} addToFavorites={addToFavorites} />}
      </div>

    </div>
  );
}

export default App;
