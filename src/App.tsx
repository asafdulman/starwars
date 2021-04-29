import './assets/scss/global.scss';
import { useEffect, useState } from 'react';
import { filmService } from './services/filmService';
import { Film } from './types/film.type';
import { FilmItem } from './components/FilmItem';
import { FilmPreview } from './components/FilmPreview';
import { FavoritesModal } from './components/FavoritesModal';
import { FAVORITE_FILMS_KEY } from './constans';
import { UserMessage } from './types/userMessage.type';
import { UserNotification } from './components/UserNotification';
import logo from './assets/img/logo.png';

function App() {

  const [films, setFilms] = useState<Film[] | null>()
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false)
  const [selectedFilm, setSelectedFilm] = useState<Film | null>()
  const [showFavoriteMessage, setShowFavoriteMessage] = useState<boolean>(false)
  const [userMessage, setUserMessage] = useState<UserMessage | null>(null)

  useEffect(() => {
    getFilmsFromService()
  }, [])

  const getFilmsFromService = async () => {
    const films = await filmService.getFilms()
    if (!films) {
      showUserMessage({ message: 'There seems to be a problem with the server, please try again', status: 'error' })
      return;
    }
    setFilms(films)
  }

  const selectFilm = (film: Film): void => setSelectedFilm(film)

  const showUserMessage = (userMessage: UserMessage) => {
    setUserMessage(userMessage)
    setShowFavoriteMessage(true)
    setTimeout(() => {
      setShowFavoriteMessage(false)
    }, 4000)
  }

  const addToFavorites = (film: Film): void => {
    const userMessage: UserMessage = filmService.addFilmToStorage(FAVORITE_FILMS_KEY, film)
    showUserMessage(userMessage)
  }

  return (
    <div className="app">
      <div className="header">
        <img className="logo-img" src={logo} alt="" />
        <button className="show-favorites-films-btn" onClick={() => setIsFavoritesModalOpen(!isFavoritesModalOpen)}>My Favorite Films</button>
      </div>
      {isFavoritesModalOpen && <FavoritesModal setIsFavoritesModalOpen={setIsFavoritesModalOpen} />}
      {showFavoriteMessage && <UserNotification userMessage={userMessage} />}
      <div className="main-container">
        <div className="film-table-list-box">
          {films?.map(film => <FilmItem key={film.episode_id} film={film} selectFilm={selectFilm} />)}
        </div>
        {selectedFilm ? <FilmPreview film={selectedFilm} addToFavorites={addToFavorites} /> :
          <h2 className="missing-films-message">Click On One Of The Films...</h2>}
      </div>

    </div>
  );
}

export default App;
