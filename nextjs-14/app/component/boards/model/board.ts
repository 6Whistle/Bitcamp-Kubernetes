export interface IBoard{
    id?: number,
    boardType?: string,
    regDate?: string,
    modDate?: string,
    json?: IBoard,
    array?: IBoard[],
    count?: number
}