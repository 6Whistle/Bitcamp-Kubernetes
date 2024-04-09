import { GridColDef } from "@mui/x-data-grid";
import { IArticle } from "../model/article";
import MyTypography from "../../common/style/cell";
import Link from "next/link";
import { PG } from "../../common/enums/PG";
import { RQ } from "../../common/enums/RQ";

interface CellType{
    row: IArticle,
}

export default function ArticleColumns(): GridColDef[]{
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
            field: 'title',
            minWidth: 30,
            headerName: "Title", 
            renderCell: ({row}: CellType) => <Link href={`${PG.ARTICLE}${RQ.DETAIL}/${row.id}`}>{MyTypography(row.title, "1rem")}</Link>
        },
        { 
            flex: 0.04,
            field: 'med',
            minWidth: 30,
            headerName: "Content", 
            renderCell: ({row}: CellType) => MyTypography(row.content, "1rem")
        },
        { 
            flex: 0.04,
            field: 'writer',
            minWidth: 30,
            headerName: "writer", 
            renderCell: ({row}: CellType) => MyTypography(row.writer, "1rem")
        },
        { 
            flex: 0.04,
            field: 'boardType',
            minWidth: 30,
            headerName: "board Type", 
            renderCell: ({row}: CellType) => MyTypography(row.boardType, "1rem")
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
