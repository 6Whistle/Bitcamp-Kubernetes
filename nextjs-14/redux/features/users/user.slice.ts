import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { fetchAllUsers } from "./user.service";

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

        builder.addCase(fetchAllUsers.fulfilled, handlefulfilled)
    }
})

export const {} = userSlice.actions
export const getAllUsers = (state:any) => state.user.array
export default userSlice.reducer