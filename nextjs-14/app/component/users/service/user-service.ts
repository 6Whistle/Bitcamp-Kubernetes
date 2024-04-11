import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI, findUserByIdAPI } from "./user-api";

export const findAllUsers:any = createAsyncThunk('users/findAllUsers', async (page:number) => findAllUsersAPI(page))

export const findUserById:any = createAsyncThunk('users/findUserById', async (id:number) => findUserByIdAPI(id))