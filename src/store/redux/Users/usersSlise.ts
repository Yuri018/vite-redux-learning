import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { UserState, User } from "./types"

const usersInitialState: UserState = {
  users: [],
}

const userSlise = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    addUser: (state: UserState, { payload }: PayloadAction<User>) => {
      state.users = [...state.users, payload]
    },
  },
})

export const usersActions = userSlise.actions

export const usersReducers = userSlise.reducer
