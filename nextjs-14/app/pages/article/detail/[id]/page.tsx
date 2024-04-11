'use client'

import { IArticle } from "@/app/component/articles/model/article";
import { deleteArticle, findArticleById, modifyArticle } from "@/app/component/articles/service/article-service";
import { contentHandler, getArticleById, titleHandler } from "@/app/component/articles/service/article-slice";
import { PG } from "@/app/component/common/enums/PG";
import { RQ } from "@/app/component/common/enums/RQ";
import { Button, Input } from "@mui/material";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function ArticleDetailPage({params}:any){
    const dispatch = useDispatch();
    const article:IArticle = useSelector(getArticleById)
    const router = useRouter();

    useEffect(() => {
        dispatch(findArticleById(params.id))
    },[])

    const changeTitleHandler = (e:any) => dispatch(titleHandler(e.target.value))
    const changeContentHandler = (e:any) => dispatch(contentHandler(e.target.value))
    const modifyArticleHandler = (e:any) => {
        dispatch(modifyArticle(article))
        router.refresh()
    }
    const deleteArticleHandler = (e:any) => {
        dispatch(deleteArticle(params.id))
        router.replace(`${PG.ARTICLE}${RQ.LIST}`)
    }

    return (<div className="text-center">
            <p className="text-xl">Article Detail</p><br />
            <p className="text-base">ID : {params.id}</p>
            <span className="text-base">Title : </span><Input className="text-base" placeholder={article.title} onChange={changeTitleHandler} /><br />
            <span className="text-base">Content : </span><Input className="text-base" placeholder={article.content} onChange={changeContentHandler} /><br />
            <p className="text-base">Register Date : {article.regDate}</p>
            <p className="text-base">Register Date : {article.modDate}</p>
            <Button onClick={modifyArticleHandler}>Update</Button>
            <Button onClick={deleteArticleHandler}>Delete</Button>
        </div>)
}
