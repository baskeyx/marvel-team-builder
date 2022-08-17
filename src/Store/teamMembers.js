import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'teamMembers',
  initialState: [],
  reducers: {
    addTeamMember: (teamMembers, action) => {
      teamMembers.push({
        id: action.payload.id,
        name: action.payload.name,
        thumbnail: action.payload.thumbnail,
      })
    },
    removeTeamMember: (teamMembers, action) => {
      return teamMembers.filter((m) => m.id !== action.payload.id)
    }
  }
})

export const {addTeamMember, removeTeamMember} = slice.actions;
export default slice.reducer;