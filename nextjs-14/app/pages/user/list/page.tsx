'use client'

import { IUser } from "@/app/component/users/model/user"
import UserColumns from "@/app/component/users/module/user-columns"
import { findAllUsers, findUsersCount } from "@/app/component/users/service/user-service"
import { getAllUsers, getUsersCount } from "@/app/component/users/service/user-slice"
import { Box, Link } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];

export default function UserListPage(){
    const dispatch = useDispatch()
    const allUsers:IUser[] = useSelector(getAllUsers)
    const userCount:number = useSelector(getUsersCount)

    useEffect(() => {
        dispatch(findAllUsers(1))
        dispatch(findUsersCount())
    }, [])
  
  return (
    <>
       <table  className="table-auto w-4/5 border-x-black" style={{margin: '50px auto'}}>
      <thead>
        <tr>
          <td>
          <div className="flex flex-col items-center justify-center w-full bg-white-300">
    <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
      {cards.map((data, index) => {
        return (
          <section
            className="flex-shrink-0 w-full snap-center justify-center items-center"
            key={index}
          >
            <img
              src={data}
              alt="Images to scroll horizontal"
              className="w-full h-[500px]"
            />
          </section>
        );
      })}
    </div>
  </div>

          </td>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td 
      align="center" className="w-full  bg-gray-400 border-black border-4 p-8 h-20 text-[20px]" 
      >
     <Link href=''>Users List</Link>
     <p className="text-right">{userCount}</p>
      </td>
  </tr>
  <tr>
      <td align="center"  className="h-300">
   {allUsers && <DataGrid
      rows={allUsers}
      columns={UserColumns()}
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
    />}
   </td>
  </tr>
     
      </tbody>
    </table>
  </>)
}
