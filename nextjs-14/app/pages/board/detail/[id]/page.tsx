'use client'

import { IBoard } from "@/app/component/boards/model/board";
import { deleteBoard, findBoardById, modifyBoard } from "@/app/component/boards/service/board-service";
import { boardTypeHandler, getBoardById } from "@/app/component/boards/service/board-slice";
import { PG } from "@/app/component/common/enums/PG";
import { RQ } from "@/app/component/common/enums/RQ";
import { Button, Input } from "@mui/material";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function BoardDetailPage({params}:any){
    const dispatch = useDispatch();
    const board:IBoard = useSelector(getBoardById)
    const router = useRouter()

    useEffect(() => {
        dispatch(findBoardById(params.id))
    },[])

    const changeBoardTypeHandler = (e:any) => dispatch(boardTypeHandler(e.target.value))
    const modifyBoardHandler = () => {
        dispatch(modifyBoard(board))
        router.refresh()
    }
    const deleteBoardHandler = () => {
        dispatch(deleteBoard(params.id))
        router.replace(`${PG.BOARD}${RQ.DEL}`)
    }

    return (<div className="text-center">
            <p className="text-xl">Board Detail</p><br />
            <p className="text-base">{params.id}</p>
            <span className="text-base">Board : </span><Input className="text-base" placeholder={board.boardType} onChange={changeBoardTypeHandler} /><br />
            <p className="text-base">Register Date : {board.regDate}</p>
            <p className="text-base">Register Date : {board.modDate}</p>
            <Button onClick={modifyBoardHandler}>Update</Button>
            <Button onClick={deleteBoardHandler}>Delete</Button>
        </div>)
}
