import { instance } from "@/app/component/common/configs/axios-config"
import { API } from "@/app/component/common/enums/API"
import { RQ } from "../../common/enums/RQ"
import { IUser } from "../model/user"

export const findAllUsersAPI = async (page:number) => {
    try {
        return <IUser[]>(await instance.get(`${API.USER}${RQ.LIST}`, {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        return error
    }
}

export const findUserByIdAPI = async (id:number) => {
    try {
        return (await instance.get(`${API.USER}${RQ.DETAIL}`, { params : {id} })).data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const findUsersCountAPI = async () => {
    try {
        return (await instance.get(`${API.USER}${RQ.CNT}`)).data.message        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const modifyUserAPI = async (user:IUser) => {
    try {
        return (await instance.put(`${API.USER}${RQ.MOD}`, user)).data        
    } catch (error) {
        console.log(error)
        return error
    }
}

export const deleteUserAPI = async (id:number) => {
    try {
        console.log(id)
        return (await instance.delete(`${API.USER}${RQ.DEL}`, {params : {id}})).data        
    } catch (error) {
        console.log(error)
        return error
    }
}