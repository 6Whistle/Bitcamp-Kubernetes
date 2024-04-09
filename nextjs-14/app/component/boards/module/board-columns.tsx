import { GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { IBoard } from "../model/board";
import Link from "next/link";
import { PG } from "../../common/enums/PG";
import MyTypography from "../../common/style/cell";
import { RQ } from "../../common/enums/RQ";

interface CellType{
    row: IBoard,
}

export default function BoardColumns(): GridColDef[]{
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
            field: 'boardType',
            minWidth: 30,
            headerName: "Board Type", 
            renderCell: ({row}: CellType) => 
            <Link href={`${PG.BOARD}${RQ.DETAIL}/${row.id}`}>{MyTypography(row.boardType, "1rem")}</Link>
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
