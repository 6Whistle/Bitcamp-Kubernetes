import { GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { UserColumn } from "./model/user-column";


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