import Button from './Button';

const Character = ({ id, name, imgPath, addTeamMember, removeTeamMember, selected }) => (
  <div className='Character'>
    <div className='Character-Info'>
      <img src={imgPath} alt={name} />
      <div>{name}</div>
    </div>
    <div>
      { selected ? 
        <Button onClick={() => removeTeamMember(id)}>-</Button> :
        <Button onClick={() => addTeamMember(id)}>+</Button>
      }
    </div>
  </div>
);

export default Character;