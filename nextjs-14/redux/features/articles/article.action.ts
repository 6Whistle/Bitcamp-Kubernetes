import { createAction, handleAction } from "redux-actions"

export const articleConstants = {
    ARTICLES_REQUEST: "ARTICLES_REQUEST",
    ARTICLES_SUCCESS: "ARTICLES_SUCCESS",
    ARTICLES_FAILURE: "ARTICLES_FAILURE",
}

export const getArticlesRequest = createAction(articleConstants.ARTICLES_REQUEST)
export const getArticlesSuccess = createAction(articleConstants.ARTICLES_SUCCESS)
export const getArticlesFailure = createAction(articleConstants.ARTICLES_FAILURE)
