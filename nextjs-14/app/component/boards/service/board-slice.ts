import { initialState } from "./board-init"
import { createSlice } from "@reduxjs/toolkit"
import { findAllBoards, findBoardById, findBoardsCount, modifyBoard } from "./board-service"
import { IBoard } from "../model/board"
import { deleteUser } from "../../users/service/user-service"


const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

export const boardSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        boardTypeHandler: (state:any, {payload}:any) => {state.json.boardType = payload}
    },
    extraReducers: builder => {
        const {pending, rejected} = status
        builder
        .addCase(findAllBoards.fulfilled, (state:any, {payload}: any) => {state.array = payload})
        .addCase(findBoardById.fulfilled, (state:any, {payload}: any) => {state.json = payload})
        .addCase(findBoardsCount.fulfilled, (state:any, {payload}: any) => {state.count = payload})
        .addCase(modifyBoard.fulfilled, (state:any, {payload}:any) => {})
        .addCase(deleteUser.fulfilled, (state:any) => {state.json = {}})
    }
})

export const getAllBoards = (state: any):IBoard[] => state.board.array
export const getBoardById = (state: any):IBoard => state.board.json
export const getBoardsCount = (state: any):number => state.board.count

export const { boardTypeHandler } = boardSlice.actions
export default boardSlice.reducer