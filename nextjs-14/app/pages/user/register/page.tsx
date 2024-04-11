'use client'

import { API } from "@/app/component/common/enums/API"
import { PG } from "@/app/component/common/enums/PG"
import AxiosConfig, { instance } from "@/app/component/common/configs/axios-config"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { NextPage } from "next"

export default function JoinPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwRepeat, setPwRepeat] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')
    const [checked, setChecked] = useState(false)
    const router = useRouter();

    const changeUsernameHandler = (e: any) => {
        setUsername(e.target.value)
    }
    const changePwHandler = (e: any) => {
        setPassword(e.target.value)
    }
    const changePwRepeatHandler = (e: any) => {
        setPwRepeat(e.target.value)
    }
    const changeNameHandler = (e: any) => {
        setName(e.target.value)
    }
    const changePhoneHandler = (e: any) => {
        setPhone(e.target.value)
    }
    const changeJobHandler = (e: any) => {
        setJob(e.target.value)
    }
    const changeCheckedHandler = () => {
        setChecked(!checked);
    }
    const clickCancelHandler = () => {

    }
    const clickJoinHandler = () => {
        const data = { username, password, name, phone, job };

        username === '' || password === '' || name === '' || phone === '' || job === ''
        ? alert("You Should Input Infomation")
        : password !== pwRepeat
        ? alert("Check Password")
        : instance.post(`${API.USER}`, data, AxiosConfig())
        .then(res => {
            alert(res.data.message)
            router.push(`${PG.USER}/login`)
        })
    }


    return (
    <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="id"><b>Username : </b></label>
        <input id="id" type="text" placeholder="Enter Username" name="text" onChange={changeUsernameHandler} /><br /><br />

        <label htmlFor="psw"><b>Password : </b></label>
        <input id="psw" type="password" placeholder="Enter Password" name="psw" required onChange={changePwHandler} /><br /><br />

        <label htmlFor="psw-repeat"><b>Repeat Password : </b></label>
        <input id="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={changePwRepeatHandler}/><br /><br />

        <label htmlFor="name"><b>Name : </b></label>
        <input id="name" type="text" placeholder="Enter Name" name="name" required onChange={changeNameHandler}/><br /><br />
        
        <label htmlFor="phone"><b>Phone : </b></label>
        <input id="phone" type="tel" placeholder="Enter Phone" name="phone" required onChange={changePhoneHandler}/><br /><br />

        <label htmlFor="job"><b>Job : </b></label>
        <input id="job" type="text" placeholder="Enter Job" name="Job" required onChange={changeJobHandler}/><br /><br />
        
        <label>
          <input type="checkbox" checked = {checked} name="remember" style={{marginBottom: "15px"}} onChange={changeCheckedHandler}/> Remember me
        </label>
        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
        <div className="clearfix">
            <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn" onClick={clickJoinHandler}>Sign Up</button>
        </div>
    </div>
    )
}