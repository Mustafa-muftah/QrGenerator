
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface historyState {
history:string[]
}

const initialState: historyState = {
 history: []
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addTohistoryList: (state, action: PayloadAction<string>) => {
        console.log("action",action.payload);
        
      state.history.push(action.payload)
    },
  },
})

export const { addTohistoryList } = historySlice.actions

export default historySlice.reducer