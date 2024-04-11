'use client'

import { IUser } from "@/app/component/users/model/user"
import UserColumns from "@/app/component/users/module/user-columns"
import { findAllUsers, findUsersCount } from "@/app/component/users/service/user-service"
import { getAllUsers, getUsersCount } from "@/app/component/users/service/user-slice"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export default function UserListPage(){
    const dispatch = useDispatch()
    const allUsers:IUser[] = useSelector(getAllUsers)
    const userCount:number = useSelector(getUsersCount)

    useEffect(() => {
        dispatch(findAllUsers(1))
        dispatch(findUsersCount())
    }, [])

    return (
        <div>
          <p className="text-center text-xl">{userCount} Users</p>
          <Box sx={{ height: "100%", width: '100%' }}>
            {allUsers && <DataGrid
              rows = {allUsers}
              columns={UserColumns()}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
            />}
          </Box>
        </div>
    )
}
