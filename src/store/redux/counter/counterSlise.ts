import { createSlice } from "@reduxjs/toolkit"

const counterInitialState = {
  count: 0,
}

const counterSlise = createSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: {
    add: (state) => {
      state.count += 1
    },
  },
})

export const actions = counterSlise.actions;

// export default counterSlise.reducer;
export const counterReducer = counterSlise.reducer;
