'use client'
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ArticlesColumns from "@/app/component/columns/articles-columns";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/redux/features/articles/article.slice";
import { fetchAllArticles } from "@/redux/features/articles/article.service";


const ArticlesPage: NextPage = () => {
  const dispatch = useDispatch()
  const allArticles: [] = useSelector(getAllArticles)

  if (allArticles !== undefined) {
    console.log("------ allArticles is defined ---------")
    console.log("length is " + allArticles.length)
    console.log(JSON.stringify(allArticles))
  }
  else {
    console.log('------ allArticles is undefined ----------')
  }

  useEffect(() => {
    dispatch(fetchAllArticles(1))
  }, [])

  return (
    <>
      <h2>Articles</h2>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={allArticles ?? [{ id: 0 }]}
          columns={ArticlesColumns()}
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
  );
}

export default ArticlesPage