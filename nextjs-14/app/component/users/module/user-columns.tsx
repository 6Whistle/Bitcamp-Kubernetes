import { GridColDef } from "@mui/x-data-grid";
import { IUser } from "../model/user";
import MyTypography from "../../common/style/cell";
import Link from "next/link";
import { PG } from "../../common/enums/PG";
import { RQ } from "../../common/enums/RQ";


interface CellType{
    row: IUser,
}

export default function UserColumns(): GridColDef[]{
    return [
        {
            flex: 0.04,
            field: 'id',
            minWidth: 30,
            headerName: 'ID',
            renderCell: ({row}: CellType) => MyTypography(row.id, "1rem")
        },
        { 
            flex: 0.04,
            field: 'username',
            minWidth: 30,
            headerName: "Username", 
            renderCell: ({row}: CellType) => <Link href={`${PG.USER}${RQ.DETAIL}/${row.id}`}>{MyTypography(row.username, "1rem")}</Link>
        },
        { 
            flex: 0.04,
            field: 'password',
            minWidth: 30,
            headerName: "Password", 
            renderCell: ({row}: CellType) => MyTypography(row.password, "1rem")
        },
        { 
            flex: 0.04,
            field: 'name',
            minWidth: 30,
            headerName: "Name", 
            renderCell: ({row}: CellType) => MyTypography(row.name, "1rem")
        },
        { 
            flex: 0.04,
            field: 'phone',
            minWidth: 30,
            headerName: "Phone", 
            renderCell: ({row}: CellType) => MyTypography(row.phone, "1rem")
        },
        { 
            flex: 0.04,
            field: 'job',
            minWidth: 30,
            headerName: "Job", 
            renderCell: ({row}: CellType) => MyTypography(row.job, "1rem")
        },
        { 
            flex: 0.04,
            field: 'regDate',
            minWidth: 30,
            headerName: "Register Date", 
            renderCell: ({row}: CellType) => MyTypography(row.regDate, "1rem")
        },
        { 
            flex: 0.04,
            field: 'modDate',
            minWidth: 30,
            headerName: "Modified Date", 
            renderCell: ({row}: CellType) => MyTypography(row.modDate, "1rem")
        }
    ]
}