import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI, findBoardByIdAPI } from "./board.api";

export const findAllBoards:any = createAsyncThunk(
    'articles/findAllArticles', 
    async (page:number, {rejectWithValue}) => await findAllBoardsAPI(page)
)

export const findBoardById:any = createAsyncThunk(
    'articles/findBoardById',
    async (id:number, {rejectWithValue}) => await findBoardByIdAPI(id)
)

