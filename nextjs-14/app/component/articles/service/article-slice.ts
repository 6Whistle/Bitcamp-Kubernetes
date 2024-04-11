import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article-init";
import { deleteArticle, findAllArticles, findArticleById, findArticlesCount, modifyArticle } from "./article-service";

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}


export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        titleHandler: (state:any, {payload}:any) => { state.json.title = payload },
        contentHandler: (state:any, {payload}:any) => { state.json.content = payload },
    },
    extraReducers: builder => {
        const {pending, rejected} = status
        builder
        .addCase(findAllArticles.fulfilled, (state:any, {payload}: any) => {state.array = payload})
        .addCase(findArticleById.fulfilled, (state:any, {payload}: any) => {state.json = payload})
        .addCase(findArticlesCount.fulfilled, (state:any, {payload}:any) => {state.count = payload})
        .addCase(modifyArticle.fulfilled, (state:any, {payload}:any) => {})
        .addCase(deleteArticle.fulfilled, (state:any, {payload}:any) => {state.json = {}})
    }
})

export const getAllArticles = (state: any) => state.article.array
export const getArticleById = (state: any) => state.article.json
export const getArticlesCount = (state: any) => state.article.count

export const { titleHandler, contentHandler } = articleSlice.actions
export default articleSlice.reducer