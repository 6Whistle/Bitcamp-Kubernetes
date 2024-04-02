'use client'

import UsersColumns from "@/app/component/columns/users-columns"
import { fetchAllUsers } from "@/redux/features/users/user.service"
import { getAllUsers } from "@/redux/features/users/user.slice"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


const UsersPage:NextPage = () => {
    const dispatch = useDispatch()
    const allUsers = useSelector(getAllUsers)

    useEffect(() => {
        dispatch(fetchAllUsers(1))
    }, [])

    return (
        <>
          <h2>User</h2>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={allUsers ?? [{id: 0}]}
              columns={UsersColumns()}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </>
    )
}

export default UsersPage