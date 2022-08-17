import { useReducer } from 'react';
import Button from './Components/Button';

const initialState = [];

export const reducer = (state = [], action) => {
  if (!action.type) return state;
  switch (action.type) {
    case 'ADD_MEMBER':
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          thumbnail: action.payload.thumbnail,
        }
      ]
    case 'REMOVE_MEMBER':
      return state.filter((m) => m.id !== action.payload.id)
    default:
      return state;
  }
}

const Character = ({ id, name, thumbnail }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='Character'>
      <div className='Character-Info'>
        <img src={thumbnail} alt={name} />
        <div>{name}</div>
      </div>
      <div>
        { state.find((m) => m.id === id) ?
          <Button onClick={() => dispatch({ type: 'REMOVE_MEMBER', payload: { id  } })}>-</Button> :
          <Button onClick={() => dispatch({ type: 'ADD_MEMBER', payload: { id, name, thumbnail  } })}>+</Button>
        }
      </div>
    </div>
  )
} 

export default Character;
