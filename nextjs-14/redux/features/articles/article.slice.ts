import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { fetchAllArticles } from "./article.service";


// const articleThunks = [fetchAllArticles]

const status = {
    pending: "pending",
    fulfilled: "fulfilled",
    rejected: "rejected"
}

const handlePending = (state:any) => {
    
}
const handleFulfilled = (state:any, {payload}:any) => {
    // console.log("================= conclusion ===================")
    // console.log(payload)
    state.array = payload.articles   
}
const handleRejected = (state:any) => {
    
}

export const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        const {pending, rejected} = status
        builder
        .addCase(fetchAllArticles.fulfilled, handleFulfilled)
    }
})

export const getAllArticles = (state: any) => { 
    console.log("---------------- before useSelector ----------------")
    console.log(JSON.stringify(state.article.array))
    return state.article.array
}

export const {} = articleSlice.actions
export default articleSlice.reducer