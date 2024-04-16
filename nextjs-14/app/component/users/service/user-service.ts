import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserAPI, findAllUsersAPI, findUserByIdAPI, findUsersCountAPI, loginAPI, modifyUserAPI } from "./user-api";
import { IUser } from "../model/user";

export const findAllUsers:any = createAsyncThunk('users/findAllUsers', async (page:number) => findAllUsersAPI(page))

export const findUserById:any = createAsyncThunk('users/findUserById', async (id:number) => findUserByIdAPI(id))

export const findUsersCount:any = createAsyncThunk('user/findUsersCount', async () => findUsersCountAPI())

export const modifyUser:any = createAsyncThunk('user/modifyUser', async (user:IUser) => modifyUserAPI(user))

export const deleteUser:any = createAsyncThunk('user/deleteUser', async (id:number) => deleteUserAPI(id))

export const login:any = createAsyncThunk('users/login', async (user:IUser) => loginAPI(user))