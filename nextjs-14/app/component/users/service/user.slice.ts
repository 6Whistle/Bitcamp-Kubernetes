import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { findAllUsers, findUserById } from "./user.service";

const handlefulfilled = (state:any, {payload}:any) => {
    state.array = payload
}

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        const {pending, rejected} = status

        builder.addCase(findAllUsers.fulfilled, handlefulfilled)
        builder.addCase(findUserById.fulfilled, (state:any, {payload}:any) => { state.array = payload})
    }
})

export const {} = userSlice.actions
export const getAllUsers = (state:any) => state.user.array
export const getUserById = (state:any) => state.user.array
export default userSlice.reducer