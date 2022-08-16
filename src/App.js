import { useState } from 'react';
import Search from './Components/Search';
import Fetch from './Components/Fetch';
import Character from './reducer';
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [team, setTeam] = useState([]);

  const handleChange = async (value) => {
    setSearchValue(value);
    if (value.length <3) { 
      setCharacters([]) 
    } else {
      const charactersResponse = await Fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${value}&apikey=5bcbb3547b9551e6c40081b37dc2f1df`);
      setCharacters(charactersResponse.data.results);
    }
  };

  return (
    <div className="App">
      <Search searchValue={searchValue} handleChange={handleChange} />
      {characters.length > 0 
        ? characters.map((c) => 
          <Character 
            key={c.id}
            id={c.id}
            name={c.name}
            thumbnail={`${c.thumbnail.path}.${c.thumbnail.extension}`}
          />)
        : null
      }
    </div>
  );
}

export default App;
