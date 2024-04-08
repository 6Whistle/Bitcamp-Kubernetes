import { instance } from "@/redux/common/configs/axios-config"
import { API } from "@/redux/common/enums/API"

export const fetchAllArticlesAPI = async(page: number) => {
    try {
        const response = await instance.get(`${API.ARTICLE}`, {
            params: {page, size: 10, limit: 10}
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
        return error
    }
}