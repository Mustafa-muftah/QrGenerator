
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
    addQrTohistoryList: (state, action: PayloadAction<string>) => {
        console.log("action",action.payload);
        
      state.history.push(action.payload)
    },
  },
})

export const { addQrTohistoryList } = historySlice.actions

export default historySlice.reducer