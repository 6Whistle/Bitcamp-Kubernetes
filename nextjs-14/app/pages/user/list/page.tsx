'use client'

import UsersColumns from "@/app/component/users/module/user-columns"
import { findAllUsers } from "@/app/component/users/service/user-service"
import { getAllUsers } from "@/app/component/users/service/user-slice"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


const UserListPage:NextPage = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(getAllUsers)

    useEffect(() => {
        dispatch(findAllUsers(1))
    }, [])

    return (
        <>
          <h2>User</h2>
          <Box sx={{ height: "100%", width: '100%' }}>
            {allUsers && <DataGrid
              rows = {allUsers}
              columns={UsersColumns()}
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
            />}
          </Box>
        </>
    )
}

export default UserListPage