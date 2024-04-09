'use client'

import { findBoardById } from "@/app/component/boards/service/board.service";
import { getBoardById } from "@/app/component/boards/service/board.slice";
import MyTypography from "@/app/component/common/style/cell";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function BoardDetailPage(props:any){
    const dispatch = useDispatch();
    const board = useSelector(getBoardById)

    useEffect(() => {
        dispatch(findBoardById(props.params.id))
    },[])

    return (<div>
            <h3>{props.params.id} Board Detail</h3>
            <span>ID : </span>{MyTypography(props.params.id, "1rem")}
            <span>Board Type : </span>{MyTypography(board.boardType, "1rem")}
            <span>Register Date : </span>{MyTypography(board.regDate, "1rem")}
            <span>Modified Date : </span>{MyTypography(board.modDate, "1rem")}
        </div>)
}
