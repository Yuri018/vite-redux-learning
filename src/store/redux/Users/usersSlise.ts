import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import{v4} from 'uuid'

import { UserState, User } from "./types"

const usersInitialState: UserState = {
  users: [],
}

const userSlise = createSlice({
  name: "USERS",
  initialState: usersInitialState,
  reducers: {
    // 2 аргумент у любого reducer - это обьект action
    // что такое обьект action?
    // action = {
    //  payload: {} //это данные которые мы передаем из компонента при диспатче экшена в круглых скобках
    // type: "USER/addUser" // это автоматичекси сгенерированный тип, мы можем увидить его в redux Devtools
    // }
    addUser: (state: UserState, { payload }: PayloadAction<User>) => {
      //  каждому новому добавленному обьекту мы добавляем id и генерируем ее через v4() из библиотеки uuid:
      // Например если payload = { firstlastName: "John", age: "23", jobTitle: "QA"}
      // { ...payload, id: v4() } === { firstlastName: "John", age: "23", jobTitle: "QA", id: v4()}
      // console.log([state.users]) // массив обьектов пытаемся положить в новосозданный пустой массив []
      // console.log([...state.users]) // через spread оператор в новосозданный пустой массив положить все данные вутри state.users
      state.users = [...state.users, {...payload, id: v4()}]
    },

    deleteUser: (state: UserState, {payload}: PayloadAction<string>)=> {
      state.users = [...state.users].filter((userObject) => userObject.id !== payload,
      )
    },

    deleteAllUsers: () => usersInitialState
  },
})

export const usersActions = userSlise.actions

export const usersReducers = userSlise.reducer
