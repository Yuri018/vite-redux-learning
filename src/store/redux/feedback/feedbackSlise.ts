import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likeCount: 0,
  diseLikeCount: 0,
}

const feedbackSlise = createSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,

  reducers: {
    like: (state: FeedbackInitialState) => {
      state.likeCount = state.likeCount + 1
    },
    diseLike: (state: FeedbackInitialState) => {
      state.diseLikeCount = state.diseLikeCount + 1
    },
    resetResults: (state: FeedbackInitialState) => {
        state.likeCount = 0,
        state.diseLikeCount = 0
    }
  },
})

export const actions = feedbackSlise.actions;
export const feedbackReducer = feedbackSlise.reducer;
