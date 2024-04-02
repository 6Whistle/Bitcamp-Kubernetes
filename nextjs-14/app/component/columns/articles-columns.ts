import { GridColDef } from "@mui/x-data-grid";

export default function ArticlesColumns(): GridColDef[]{
    return [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'content', headerName: 'Content', width: 150 },
        { field: 'writer', headerName: 'Writer', width: 150 },
        { field: 'registerDate', headerName: 'Resgister Date', width: 150 },
    ]
}