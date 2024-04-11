import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBoardAPI, findAllBoardsAPI, findBoardByIdAPI, findBoardsCountAPI, modifyBoardAPI } from "./board-api";
import { IBoard } from "../model/board";

export const findAllBoards:any = createAsyncThunk('boards/findAllBoards', async (page:number, {rejectWithValue}) => await findAllBoardsAPI(page))

export const findBoardById:any = createAsyncThunk('boards/findBoardById', async (id:number) => await findBoardByIdAPI(id))

export const findBoardsCount:any = createAsyncThunk('boards/findBoardsCount', async () => await findBoardsCountAPI())

export const modifyBoard:any = createAsyncThunk('boards/modifyBoard', async (board:IBoard) => modifyBoardAPI(board))

export const deleteBoard:any = createAsyncThunk('boards/deleteBoard', async (id:number) => deleteBoardAPI(id))