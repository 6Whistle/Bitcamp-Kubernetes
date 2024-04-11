import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user-init";
import { deleteUser, findAllUsers, findUserById, findUsersCount, modifyUser } from "./user-service";
import { IUser } from "../model/user";

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        passwordHandler: (state:any, {payload}) => {    state.json.password = payload    },
        nameHandler: (state:any, {payload}) => {    state.json.name = payload    },
        phoneHandler: (state:any, {payload}) => {    state.json.phone = payload    },
        jobHandler: (state:any, {payload}) => {    state.json.job = payload    }
    },
    extraReducers: builder => {
        const {pending, rejected} = status

        builder.addCase(findAllUsers.fulfilled, (state:any, {payload}:any) => { state.array = payload})
        builder.addCase(findUserById.fulfilled, (state:any, {payload}:any) => { state.json = payload})
        builder.addCase(findUsersCount.fulfilled, (state:any, {payload}:any) => { state.count = payload })
        builder.addCase(modifyUser.fulfilled, (state:any, {payload}:any) => {})
        builder.addCase(deleteUser.fulfilled, (state:any, {payload}:any) => {state.json = {}})
    }
})

export const getAllUsers = (state:any):IUser[] => state.user.array
export const getUserById = (state:any):IUser => state.user.json
export const getUsersCount = (state:any):number => state.user.count

export const { passwordHandler, nameHandler, phoneHandler, jobHandler } = userSlice.actions
export default userSlice.reducer