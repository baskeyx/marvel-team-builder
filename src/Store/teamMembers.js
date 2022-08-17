// Action types

// import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const ADD_MEMBER = 'ADD_MEMBER';
const REMOVE_MEMBER = 'REMOVE_MEMBER';

// Action creators

// export const addTeamMember = createAction('addTeamMember');

export const addTeamMember = (id, name, thumbnail) => ({
  type: ADD_MEMBER,
  payload: {
    id, name, thumbnail
  }
});

// export const removeTeamMember = createAction('removeTeamMember');

export const removeTeamMember = id => ({
  type: REMOVE_MEMBER,
  payload: {
    id
  }
});

// redeucer

// createReducer([], {
//   [addTeamMember.type]: (state, action) => {
//     state.push({
//       id: action.payload.id,
//       name: action.payload.name,
//       thumbnail: action.payload.thumbnail,
//     })
//   },
//   [removeTeamMember.type]: (state, action) => {
//     return state.filter((m) => m.id !== action.payload.id)
//   }
// })

// export default createReducer;

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_MEMBER:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          thumbnail: action.payload.thumbnail,
        }
      ]
    case REMOVE_MEMBER:
      return state.filter((m) => m.id !== action.payload.id)
    default:
      return state;
  }
}

export default reducer;
