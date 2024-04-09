'use client'
import { Button } from "@mui/material"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useSelector, useDispatch } from "react-redux"
import {plusCountHandler, minusCountHandler, getCount} from "@/app/component/counter/service/counter.slice"
import { NextPage } from "next";

const ReduxCounterPage:NextPage = () => {

    const count = useSelector(getCount)
    const dispatch = useDispatch()

    return(<div className="text-center">
        <h1>Redux Counter : {count}</h1>
        <Button onClick = {() => dispatch(plusCountHandler())}>        
            <AddCircleOutlineIcon />
        </Button>
        <Button onClick = {() => dispatch(minusCountHandler())}>
            <RemoveCircleOutlineIcon />
        </Button>
    </div>)
}

export default ReduxCounterPage