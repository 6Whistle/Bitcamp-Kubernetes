'use client'
import { useEffect } from "react"
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles, getArticlesCount } from "@/app/component/articles/service/article-slice";
import { findAllArticles, findArticlesCount } from "@/app/component/articles/service/article-service";
import ArticleColumns from "@/app/component/articles/module/article-columns";
import { DataGrid } from "@mui/x-data-grid";
import { IArticle } from "@/app/component/articles/model/article";


export default function ArticleListPage(){
  const dispatch = useDispatch()
  const allArticles: IArticle[] = useSelector(getAllArticles)
  const articlesCount:number = useSelector(getArticlesCount)

  useEffect(() => {
    dispatch(findAllArticles(1))
    dispatch(findArticlesCount())
  }, [])

  return (
    <>        
    <p className="text-center text-xl">{articlesCount} articles</p>
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