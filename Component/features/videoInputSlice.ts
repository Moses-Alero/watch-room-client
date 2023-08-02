import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { type } from "os"


type initialState = {
  videoURL: any
}

const initialState:initialState = {
  videoURL: ""
}

const videoInputSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    videoURL:(state, action: PayloadAction<any>) => {
      state.videoURL = action.payload
    }
  }
})

export default videoInputSlice.reducer
export const {videoURL} = videoInputSlice.actions