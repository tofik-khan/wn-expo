import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JSX } from 'react';

type SnackBarType = {
  open: boolean,
  message?: string | JSX.Element | JSX.Element[],
}; 

type AppState = {
  successSnackbar: SnackBarType
}

const initialState: AppState = {
  successSnackbar: {
    open: false,
    message: ""
  }
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showSuccess: (state, action: PayloadAction<SnackBarType>) => {
      state.successSnackbar =  action.payload
    },
  }
})

export const { showSuccess } = appSlice.actions

export default appSlice.reducer