import { useState, useEffect } from 'react';
import Search from './Components/Search';
import Fetch from './Components/Fetch';
import Character from './Components/Character';
import createStore from './Store/createStore';
import Team from './Components/Team';
import './App.css';

const store = createStore();

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const currentStore = store.getState();
      if (team !== currentStore) setTeam(store.getState());
    });
    return unsubscribe;
  }, [])

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
              store={store}
              selected={team.find((m) => m.id === c.id)}
            />)
          : null
        }
        <Team team={team} />
    </div>
  );
}

export default App;
