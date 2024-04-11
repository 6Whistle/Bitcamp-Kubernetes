'use client'


import MyTypography from "@/app/component/common/style/cell";
import { findUserById } from "@/app/component/users/service/user-service";
import { getUserById } from "@/app/component/users/service/user-slice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UserDetailPage(props:any){
    const dispatch = useDispatch();
    const user = useSelector(getUserById)

    useEffect(() => {
        dispatch(findUserById(props.params.id))
    },[])

    return (<div>
            <h3>{props.params.id} Board Detail</h3>
            <span>ID : </span>{MyTypography(props.params.id, "1rem")}
            <span>Name : </span>{MyTypography(user.username, "1rem")}
            <span>Password : </span>{MyTypography(user.password, "1rem")}
            <span>Name : </span>{MyTypography(user.name, "1rem")}
            <span>Phone : </span>{MyTypography(user.phone, "1rem")}
            <span>Job : </span>{MyTypography(user.job, "1rem")}
            <span>Register Date : </span>{MyTypography(user.regDate, "1rem")}
            <span>Modified Date : </span>{MyTypography(user.modDate, "1rem")}
        </div>)
}
