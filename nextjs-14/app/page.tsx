'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { API } from "./component/common/enums/API"
import AxiosConfig, { instance } from "./component/common/configs/axios-config"
import { PG } from "./component/common/enums/PG"
import { NextPage } from "next"

const HomePage:NextPage = () => {
  const [name, setName] = useState('')
  const url = `${API.USER}/name`;
  const data = {name};

  const changeHandler = (e: any) => {
    setName(e.target.value)
  }

  const clickHandler = () => {
    alert("request name : " + name)
    instance.post(url, data, AxiosConfig())
    .then(res=>{
      alert("response name : " + res.data.name)
    })
  }

  return <div className='text-center'>
      <b>Welcome To Next.js!!</b>
      <h3>Insert your name</h3>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>send</button><br />
      <Link href={`${PG.DEMO}/mui-demo/list`}>mui-demo</Link><br />
      <Link href={`${PG.DEMO}/redux-counter/list`}>counter-redux</Link><br />
  </div>
}

export default HomePage