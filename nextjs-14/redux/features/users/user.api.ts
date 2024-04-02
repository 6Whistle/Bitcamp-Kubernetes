import { instance } from "@/redux/common/configs/axios-config"

export const fetchAllUsersAPI = async (page:number) => {
    try {
        return (await instance.get('/users/all-users')).data.users
    } catch (error) {
        return error
    }
}