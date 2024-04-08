import { instance } from "@/redux/common/configs/axios-config"
import { API } from "@/redux/common/enums/API"

export const fetchAllUsersAPI = async (page:number) => {
    try {
        return (await instance.get(`${API.USER}`, {
            params: {page, size: 10, limit: 10}
        })).data
    } catch (error) {
        return error
    }
}