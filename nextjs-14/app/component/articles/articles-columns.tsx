import { GridColDef } from "@mui/x-data-grid";
import { ArticleColumn } from "./model/article-columns";
import { Typography } from "@mui/material";

interface CellType{
    row: ArticleColumn,
}

export default function ArticlesColumns(): GridColDef[]{
    return [
        {
            flex: 0.04,
            field: 'id',
            minWidth: 30,
            headerName: 'ID',
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}>{row.id}</Typography>
        },
        { 
            flex: 0.04,
            field: 'title',
            minWidth: 30,
            headerName: "Title", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.title} </Typography>
        },
        { 
            flex: 0.04,
            field: 'content',
            minWidth: 30,
            headerName: "Content", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.content} </Typography>
        },
        { 
            flex: 0.04,
            field: 'writer',
            minWidth: 30,
            headerName: "writer", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.writer} </Typography>
        },
        { 
            flex: 0.04,
            field: 'registerDate',
            minWidth: 30,
            headerName: "Register Date", 
            renderCell: ({row}: CellType) => 
            <Typography textAlign="center" sx={{ fontSize: "1.5rem" }}> {row.registerDate} </Typography>
        }
    ]
}
