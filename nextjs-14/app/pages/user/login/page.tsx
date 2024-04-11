'use client'
import { API } from "@/app/component/common/enums/API";
import { PG } from "@/app/component/common/enums/PG";
import AxiosConfig, { instance } from "@/app/component/common/configs/axios-config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RQ } from "@/app/component/common/enums/RQ";

export default function LoginPage(){
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
        const data = {username, password};

        instance.post(`${API.USER}`, data, AxiosConfig())
        .then(res => {
            (res.data.message) === "SUCCESS"
            ? router.push(`${PG.ARTICLE}${RQ.DETAIL}`)
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
