'use client'
import { Button } from "@mui/material"
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const plusButtonHandler = () => setCount(count + 1)
    const minusButtonHandler = () => setCount(count - 1)

    return (<div className="text-center">
    <p className="text-3xl">Counter : {count}</p>
    <Button className="text-3xl bg-blue-300" onClick={plusButtonHandler}>+</Button>
    <Button className="text-3xl bg-blue-300" onClick={minusButtonHandler}>-</Button>
    </div>)
}