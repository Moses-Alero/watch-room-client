import videoInputSlice from "@/Component/features/videoInputSlice";
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
  reducer:{
    url: videoInputSlice
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch