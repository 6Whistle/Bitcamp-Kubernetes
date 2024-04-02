import { GridColDef } from "@mui/x-data-grid";

export default function UsersColumns(): GridColDef[]{
    return [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'password', headerName: 'Password', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'job', headerName: 'Job', width: 150 },
    ]
}
