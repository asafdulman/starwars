import './App.css';
import { filmService } from './services/filmService';

function App() {


  return (
    <div className="app">
      <button onClick={() => filmService.getFilms()}>Get Films</button>
    </div>
  );
}

export default App;
