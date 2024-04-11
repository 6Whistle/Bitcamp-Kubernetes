import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllArticlesAPI, findArticleByIdAPI } from "./article-api";

export const findAllArticles:any = createAsyncThunk(
    'articles/findAllArticles', 
    async (page:number, {rejectWithValue}) => await findAllArticlesAPI(page)
)

export const findArticleById:any = createAsyncThunk(
    'articles/findArticleById',
    async (id:number, {rejectWithValue}) => await findArticleByIdAPI(id)
)