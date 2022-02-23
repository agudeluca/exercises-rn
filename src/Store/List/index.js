import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'tasks',
  initialState: { tasks: [] },
  reducers: {
    addList: (state, { task }) => {
      state.tasks = [...state.stasks, task]
    },
  },
})

export const { changeTheme, setDefaultTheme } = slice.actions

export default slice.reducer
