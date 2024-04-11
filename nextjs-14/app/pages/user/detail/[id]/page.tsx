'use client'

import { PG } from "@/app/component/common/enums/PG";
import { RQ } from "@/app/component/common/enums/RQ";
import MyTypography from "@/app/component/common/style/cell";
import { IUser } from "@/app/component/users/model/user";
import { deleteUser, findUserById, modifyUser } from "@/app/component/users/service/user-service";
import { getUserById, jobHandler, nameHandler, passwordHandler, phoneHandler } from "@/app/component/users/service/user-slice";
import { Button, Input } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function UserDetailPage({params}:any){
    const dispatch = useDispatch();
    const user:IUser = useSelector(getUserById)
    const router = useRouter()

    const changePasswordHandler = (e:any) => dispatch(passwordHandler(e.target.value))
    const changeNameHandler = (e:any) => dispatch(nameHandler(e.target.value))
    const changePhoneHandler = (e:any) => dispatch(phoneHandler(e.target.value))
    const changeJobHandler = (e:any) => dispatch(jobHandler(e.target.value))
    const modifyUserHandler = () => {
        dispatch(modifyUser(user))
        router.refresh()
    }
    const deleteUserHandler = () => {
        dispatch(deleteUser(params.id))
        router.replace(`${PG.USER}${RQ.LIST}`)
    }

    useEffect(() => {
        dispatch(findUserById(params.id))
    },[])

    return (<div className="text-center">
            <p className="text-xl">User Detail</p><br />
            <p className="text-base">id : {params.id}</p>
            <p className="text-base">Username : {user.username}</p>
            <span className="text-base">password : </span><Input className="text-base" placeholder={user.password} onChange={changePasswordHandler} /><br />
            <span className="text-base">name : </span><Input className="text-base" placeholder={user.name} onChange={changeNameHandler} /><br />
            <span className="text-base">phone : </span><Input className="text-base" placeholder={user.phone} onChange={changePhoneHandler} /><br />
            <span className="text-base">job : </span><Input className="text-base" placeholder={user.job} onChange={changeJobHandler} /><br />
            <p className="text-base">Register Date : {user.regDate}</p>
            <p className="text-base">Register Date : {user.modDate}</p>
            <Button onClick={modifyUserHandler}>Update</Button>
            <Button onClick={deleteUserHandler}>Delete</Button>
        </div>)
}
