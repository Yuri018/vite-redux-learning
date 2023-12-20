import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

import { CatFactsState } from "./types"

const CatFactsInitialState: CatFactsState = {
  data: null,
  error: null,
  isLoading: false
}

export const getCatFacts = createAsyncThunk(
  "CAT_FACTS/getCatFacts",
  async () => {
    const response = await fetch("https://catfact.ninja/fact")
    const result = await response.json()

    return result
  },
)

const catFactsSlice = createSlice({
  name: "CAT_FACTS",
  initialState: CatFactsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCatFacts.pending, (state)=> {
        state.data = null
        state.error = null
        state.isLoading = true
    })
    .addCase(getCatFacts.fulfilled, (state, {payload}:PayloadAction<any>)=> {
        state.isLoading = false
        state.data = state.data ? [...state.data,  ...payload]: payload;
    })
    .addCase(getCatFacts.rejected, (state, {payload}: PayloadAction<any>)=> {
        state.isLoading = false
        state.error = payload
    })
  }
})

export const catFactsAction = catFactsSlice.actions

export const catFactsReducers = catFactsSlice.reducer
