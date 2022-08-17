import Button from './Button';
import { addTeamMember, removeTeamMember } from '../Store/teamMembers';

const Character = ({ id, name, thumbnail, selected, store }) => (
  <div className='Character'>
    <div className='Character-Info'>
      <img src={thumbnail} alt={name} />
      <div>{name}</div>
    </div>
    <div>
      { selected ? 
         <Button onClick={() => store.dispatch(removeTeamMember(id))} >-</Button> :
         <Button onClick={() => store.dispatch(addTeamMember(id, name, thumbnail))} >+</Button>
      }
    </div>
  </div>
);

export default Character;