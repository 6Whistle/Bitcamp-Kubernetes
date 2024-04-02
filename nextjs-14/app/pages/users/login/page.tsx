'use client'
import { API } from "@/redux/common/enums/API";
import { PG } from "@/redux/common/enums/PG";
import AxiosConfig from "@/redux/common/configs/axios-config";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NextPage } from "next";

const LoginPage:NextPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const changeUsernameHandler = (e: any) => {
        setUsername(e.target.value)
    } 
    const changePasswordHandler = (e: any) => {
        setPassword(e.target.value)
    }
    const submitHandler = () => {
        const url = `${API.SERVER}${API.USER}/login`;
        const data = {username, password};

        axios.post(url, data, AxiosConfig())
        .then(res => {
            (res.data.message) === "SUCCESS"
            ? router.push(`${PG.BOARD}/articles`)
            : alert("Failed to login")
        })
    }

    return <div>
            <h3>Login Page</h3>
            <h5>ID</h5>
            <input type="text" onChange={changeUsernameHandler}/><br />
            <h5>PW</h5>
            <input type="text" onChange={changePasswordHandler}/><br /><br />
            <button onClick={submitHandler}>login</button><br />
            <Link href={`${PG.USER}/join`}>join</Link>
    </div>;
}

export default LoginPage