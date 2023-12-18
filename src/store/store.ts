import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"

import { counterReducer } from "./redux/counter/counterSlise"

import {feedbackReducer} from './redux/feedback/feedbackSlise'

import{usersReducers} from './redux/Users/usersSlise'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    feedback: feedbackReducer,
    users: usersReducers,

  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Дааные в Redux store лежат примерно таким образом

// const globalStore = {
//  counter: {
//    count:0
//   },
//   auth: {
//     token: "ASDAFASDASD123124124124ADCADF",
//     privateRules: false,
//   },
//   weather: {
//     city: "Berlin",
//     temp: "1423142",
//     feelsLikeTemp: "123",
//   },
// }
