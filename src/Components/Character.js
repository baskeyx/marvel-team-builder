// import Button from './Button';
// import { addTeamMember, removeTeamMember } from '../Store/teamMembers';

// const Character = ({ id, name, thumbnail, selected, store }) => (
//   <div className='Character'>
//     <div className='Character-Info'>
//       <img src={thumbnail} alt={name} />
//       <div>{name}</div>
//     </div>
//     <div>
//       { selected ? 
//          <Button onClick={() => store.dispatch(removeTeamMember({id}))} >-</Button> :
//          <Button onClick={() => store.dispatch(addTeamMember({id, name, thumbnail}))} >+</Button>
//       }
//     </div>
//   </div>
// );

// export default Character;

import Button from './Button';
import { addTeamMember, removeTeamMember } from '../Store/teamMembers';
import { connect } from 'react-redux';

const Character = ({ id, name, thumbnail, selected, removeTeamMember, addTeamMember }) => (
  <div className='Character'>
    <div className='Character-Info'>
      <img src={thumbnail} alt={name} />
      <div>{name}</div>
    </div>
    <div>
      { selected ? 
         <Button onClick={() => removeTeamMember(id)} >-</Button> :
         <Button onClick={() => addTeamMember(id, name, thumbnail)} >+</Button>
      }
    </div>
  </div>
);

// const mapStateToProps = state => ({
//   state
// });

const mapDispatchToProps = dispatch => ({
  removeTeamMember: (id) => dispatch(removeTeamMember({id})),
  addTeamMember: (id, name, thumbnail) => dispatch(addTeamMember({id, name, thumbnail})),
});

export default connect(null, mapDispatchToProps)(Character);