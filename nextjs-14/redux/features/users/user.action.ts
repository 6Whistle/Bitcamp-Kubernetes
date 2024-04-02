import { createAction, handleAction } from "redux-actions";

export const userConstantants = {
    USERS_REQUEST: "USERS_REQUEST",
    USERS_SUCCESS: "USERS_SUCCESS",
    USERS_FAILURE: "USERS_FAILURE",
}

export const getUsersRequest = createAction(userConstantants.USERS_REQUEST)
export const getUsersSuccess = createAction(userConstantants.USERS_SUCCESS)
export const getUsersFailure = createAction(userConstantants.USERS_FAILURE)
