import { API } from "@/redux/common/enums/API";
import axios from "axios";
import { useEffect, useState } from "react";
import AxiosConfig from "@/redux/common/configs/axios-config";

export default function ArticlesRows(){
    const url = `${API.SERVER}${API.ARTICLE}`
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        axios.get(url, AxiosConfig())
        .then(res => setArticleList(res.data.articles))
        }, [])
    return articleList
}