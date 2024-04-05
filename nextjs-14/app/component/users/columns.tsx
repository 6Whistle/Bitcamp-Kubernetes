import { GridColDef } from "@mui/x-data-grid";
import { UserColumn } from "./model/user-columns";
import { Typography } from "@mui/material";


interface CellType{
    row: UserColumn,
}

export default function UsersColumns(): GridColDef[]{
    return [
        {
            flex: 0.04,
            field: 'username',
            minWidth: 30,
            headerName: 'ID',
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.id}</Typography>
        },
        { 
            flex: 0.04,
            field: 'password',
            minWidth: 30,
            headerName: "Password", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.password} </Typography>
        },
        { 
            flex: 0.04,
            field: 'name',
            minWidth: 30,
            headerName: "Name", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.name} </Typography>
        },
        { 
            flex: 0.04,
            field: 'phone',
            minWidth: 30,
            headerName: "Phone", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.phone} </Typography>
        },
        { 
            flex: 0.04,
            field: 'job',
            minWidth: 30,
            headerName: "Job", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.job} </Typography>
        }
    ]
}

        // { field: 'username', headerName: 'Username', width: 150 },
        // { field: 'password', headerName: 'Password', width: 150 },
        // { field: 'name', headerName: 'Name', width: 150 },
        // { field: 'phone', headerName: 'Phone', width: 150 },
        // { field: 'job', headerName: 'Job', width: 150 },