import { initialState } from "./board.init"
import { createSlice } from "@reduxjs/toolkit"
import { findAllBoards, findBoardById } from "./board.service"


const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

const handleFulfilled = (state:any, {payload}: any) => {
    state.array = payload
}

export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        const {pending, rejected} = status
        builder
        .addCase(findAllBoards.fulfilled, handleFulfilled)
        .addCase(findBoardById.fulfilled, (state:any, {payload}: any) => {state.array = payload})
    }
})

export const getAllBoards = (state: any) => state.board.array
export const getBoardById = (state: any) => state.board.array
export const {} = boardSlice.actions
export default boardSlice.reducer