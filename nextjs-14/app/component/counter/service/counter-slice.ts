import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./counter-init";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusCountHandler: (state) => {  state.value += 1;   },
    minusCountHandler: (state) => { state.value -= 1;   },
  },
});

export const { plusCountHandler, minusCountHandler } = counterSlice.actions
export const getCount = (state:any) => state.count.value;
export default counterSlice.reducer;