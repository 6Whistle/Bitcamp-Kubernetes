// 'use client'

// import { API } from "@/app/component/common/enums/API"
// import { PG } from "@/app/component/common/enums/PG"
// import AxiosConfig, { instance } from "@/app/component/common/configs/axios-config"
// import axios from "axios"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { NextPage } from "next"

// export default function JoinPage(){
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [pwRepeat, setPwRepeat] = useState('')
//     const [name, setName] = useState('')
//     const [phone, setPhone] = useState('')
//     const [job, setJob] = useState('')
//     const [checked, setChecked] = useState(false)
//     const router = useRouter();

//     const changeUsernameHandler = (e: any) => {
//         setUsername(e.target.value)
//     }
//     const changePwHandler = (e: any) => {
//         setPassword(e.target.value)
//     }
//     const changePwRepeatHandler = (e: any) => {
//         setPwRepeat(e.target.value)
//     }
//     const changeNameHandler = (e: any) => {
//         setName(e.target.value)
//     }
//     const changePhoneHandler = (e: any) => {
//         setPhone(e.target.value)
//     }
//     const changeJobHandler = (e: any) => {
//         setJob(e.target.value)
//     }
//     const changeCheckedHandler = () => {
//         setChecked(!checked);
//     }
//     const clickCancelHandler = () => {

//     }
//     const clickJoinHandler = () => {
//         const data = { username, password, name, phone, job };

//         username === '' || password === '' || name === '' || phone === '' || job === ''
//         ? alert("You Should Input Infomation")
//         : password !== pwRepeat
//         ? alert("Check Password")
//         : instance.post(`${API.USER}`, data, AxiosConfig())
//         .then(res => {
//             alert(res.data.message)
//             router.push(`${PG.USER}/login`)
//         })
//     }


//     return (
//     <div className="container">
//         <h1>Sign Up</h1>
//         <p>Please fill in this form to create an account.</p>
//         <hr />
//         <label htmlFor="id"><b>Username : </b></label>
//         <input id="id" type="text" placeholder="Enter Username" name="text" onChange={changeUsernameHandler} /><br /><br />

//         <label htmlFor="psw"><b>Password : </b></label>
//         <input id="psw" type="password" placeholder="Enter Password" name="psw" required onChange={changePwHandler} /><br /><br />

//         <label htmlFor="psw-repeat"><b>Repeat Password : </b></label>
//         <input id="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={changePwRepeatHandler}/><br /><br />

//         <label htmlFor="name"><b>Name : </b></label>
//         <input id="name" type="text" placeholder="Enter Name" name="name" required onChange={changeNameHandler}/><br /><br />
        
//         <label htmlFor="phone"><b>Phone : </b></label>
//         <input id="phone" type="tel" placeholder="Enter Phone" name="phone" required onChange={changePhoneHandler}/><br /><br />

//         <label htmlFor="job"><b>Job : </b></label>
//         <input id="job" type="text" placeholder="Enter Job" name="Job" required onChange={changeJobHandler}/><br /><br />
        
//         <label>
//           <input type="checkbox" checked = {checked} name="remember" style={{marginBottom: "15px"}} onChange={changeCheckedHandler}/> Remember me
//         </label>
//         <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>
//         <div className="clearfix">
//             <button type="button" className="cancelbtn">Cancel</button>
//                 <button type="submit" className="signupbtn" onClick={clickJoinHandler}>Sign Up</button>
//         </div>
//     </div>
//     )
// }

import Link from "next/link";
import React from "react";
const RegistartionForm = () => {
  return (
    <div className="h-[80vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                Student Sign up
              </h1>
              <p className="text-[12px] text-gray-500">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="tel"
                  placeholder="Enter your phone"
                />
                <input
                  className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?{" "}
                  <Link href="/">
                    <span className="text-blue-900 font-semibold">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistartionForm;