'use client'
import { useEffect } from "react"
import Box from '@mui/material/Box';
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/component/articles/service/article.slice";
import { findAllArticles } from "@/app/component/articles/service/article.service";
import ArticleColumns from "@/app/component/articles/module/article-columns";
import { DataGrid } from "@mui/x-data-grid";


const ArticleListPage: NextPage = () => {
  const dispatch = useDispatch()
  const allArticles: [] = useSelector(getAllArticles)

  useEffect(() => {
    dispatch(findAllArticles(1))
  }, [])

  return (
    <>
      <h2>Articles</h2>
      <Box sx={{ height: "100%", width: '100%' }}>
        { allArticles && <DataGrid
          rows = {allArticles}
          columns={ArticleColumns()}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
        />}
      </Box>
    </>
  );
}

export default ArticleListPage