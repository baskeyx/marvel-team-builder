import { useState } from 'react';
import Search from './Components/Search';
import Fetch from './Components/Fetch';
import Character from './Components/Character';
import Team from './Components/Team';
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

  const addTeamMember = (id) => {
    id = Number(id);
    const tempTeam = team;
    const findCharacter = characters.find((c) => c.id === id);
    const { name, thumbnail } = findCharacter;
    tempTeam.push({
      name,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      id,
    });
    setTeam([...tempTeam]);
  }

  const removeTeamMember = (id) => {
    id = Number(id)
    const tempTeam = team.filter((m) => m.id !== id)
    setTeam([...tempTeam]);
  }

  return (
    <div className="App">
      <Search searchValue={searchValue} handleChange={handleChange} />
      {characters.length > 0 
        ? characters.map((c) => 
          <Character 
            key={c.id}
            id={c.id}
            name={c.name}
            imgPath={`${c.thumbnail.path}.${c.thumbnail.extension}`}
            addTeamMember={addTeamMember}
            removeTeamMember={removeTeamMember}
            selected={team.find((m) => m.id === c.id)}
          />)
        : null
      }
      <Team team={team} />
    </div>
  );
}

export default App;
