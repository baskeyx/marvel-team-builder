import Button from './Button';

const Character = ({ id, name, imgPath, addTeamMember, removeTeamMember, selected }) => (
  <div className='Character'>
    <div className='Character-Info'>
      <img src={imgPath} alt={name} />
      <div>{name}</div>
    </div>
    <div>
      { selected ? 
        <Button onClick={(e) => removeTeamMember(e.target.dataset.id)} data-id={id}>-</Button> :
        <Button onClick={(e) => addTeamMember(e.target.dataset.id)} data-id={id}>+</Button>
      }
    </div>
  </div>
);

export default Character;