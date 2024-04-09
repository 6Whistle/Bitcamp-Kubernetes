'use client'

import BoardColumns from "@/app/component/boards/module/board-columns"
import { findAllBoards } from "@/app/component/boards/service/board.service"
import { getAllBoards } from "@/app/component/boards/service/board.slice"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const BoardListPage: NextPage = () => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)
  
    useEffect(() => {
      dispatch(findAllBoards(1))
    }, [])
  
    return (
      <>
        <h2>Boards</h2>
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
  
  export default BoardListPage