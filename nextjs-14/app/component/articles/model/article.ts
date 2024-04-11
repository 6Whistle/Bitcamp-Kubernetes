export interface IArticle{
    id?: number,
    title?: string,
    content?: string,
    writer?: string,
    boardType?: string,
    regDate?: string,
    modDate?: string,
    json?: IArticle,
    array?: IArticle[],
    count?: number
}