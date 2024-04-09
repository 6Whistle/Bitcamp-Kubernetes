import { instance } from "@/app/component/common/configs/axios-config"
import { API } from "@/app/component/common/enums/API"
import { RQ } from "../../common/enums/RQ"

export const findAllArticlesAPI = async(page: number) => {
    try { 
        return (await instance.get(`${API.ARTICLE}${RQ.LIST}`, {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const findArticleByIdAPI = async (id: number) => {
    try {
        return (await instance.get(`${API.ARTICLE}${RQ.DETAIL}`, {
            params: {id}
        })).data
    } catch (error) {
        return error
    }
}