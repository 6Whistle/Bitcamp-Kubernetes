import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI } from "./user.api";

export const fetchAllUsers:any = createAsyncThunk('users/fetchAllUsers', async (page:number) => {
    const temp = fetchAllUsersAPI(page)
    console.log(JSON.stringify(temp))
    return temp
})