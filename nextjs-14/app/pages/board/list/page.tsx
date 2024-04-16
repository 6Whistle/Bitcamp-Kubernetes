'use client'

import { IBoard } from "@/app/component/boards/model/board"
import BoardColumns from "@/app/component/boards/module/board-columns"
import { findAllBoards, findBoardsCount } from "@/app/component/boards/service/board-service"
import { getAllBoards, getBoardsCount } from "@/app/component/boards/service/board-slice"
import { Box, Link } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];

export default function BoardListPage(){
    const dispatch = useDispatch()
    const allBoards: IBoard[] = useSelector(getAllBoards)
    const boardsCount = useSelector(getBoardsCount)
  
    useEffect(() => {
      dispatch(findAllBoards(1))
      dispatch(findBoardsCount())
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
       <Link href=''>Board List</Link>
       <p className="text-right">{boardsCount}</p>
        </td>
    </tr>
    <tr>
        <td align="center"  className="h-300">
     {allBoards && <DataGrid
        rows={allBoards}
        columns={BoardColumns()}
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