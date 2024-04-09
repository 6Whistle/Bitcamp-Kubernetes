import { instance } from "../../common/configs/axios-config"
import { API } from "../../common/enums/API"
import { RQ } from "../../common/enums/RQ"

export const findAllBoardsAPI = async (page: number) => {
    try {
        return (await instance.get(`${API.BOARD}${RQ.LIST}`, {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const findBoardByIdAPI = async (id: number) => {
    try {
        return (await instance.get(`${API.BOARD}${RQ.DETAIL}`, {
            params: {id}
        })).data
    } catch (error) {
        console.log(error)
        return error
    }
}