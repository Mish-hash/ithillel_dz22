
import './App.css';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
      <RickAndMorty/>
    </div>
  );
}

export default App;
