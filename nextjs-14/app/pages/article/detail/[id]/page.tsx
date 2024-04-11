'use client'

import { findArticleById } from "@/app/component/articles/service/article-service";
import { getArticleById } from "@/app/component/articles/service/article-slice";
import MyTypography from "@/app/component/common/style/cell";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function ArticleDetailPage(props:any){
    const dispatch = useDispatch();
    const article = useSelector(getArticleById)

    useEffect(() => {
        dispatch(findArticleById(props.params.id))
    },[])

    return (<div>
            <h3>{props.params.id} Article Detail</h3>
            <span>ID : </span>{MyTypography(props.params.id, "1rem")}
            <span>Title : </span>{MyTypography(article.title, "1rem")}
            <span>content : </span>{MyTypography(article.content, "1rem")}
            <span>writer : </span>{MyTypography(article.writer, "1rem")}
            <span>Register Date : </span>{MyTypography(article.regDate, "1rem")}
            <span>Modified Date : </span>{MyTypography(article.modDate, "1rem")}
        </div>)
}
