'use client'

import { IBoard } from "@/app/component/boards/model/board"
import BoardColumns from "@/app/component/boards/module/board-columns"
import { findAllBoards, findBoardsCount } from "@/app/component/boards/service/board-service"
import { getAllBoards, getBoardsCount } from "@/app/component/boards/service/board-slice"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

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
        <p className="text-center text-xl">{boardsCount} Boards</p>
        <Box sx={{ height: '100%', width: '100%' }}>
          { allBoards && <DataGrid
            rows = {allBoards}
            columns={BoardColumns()}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
          />}
        </Box>
      </>
    );
}