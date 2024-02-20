type TMusicId = `${string}-${string}-${string}-${string}-${string}`

export interface IMusic {
    id: TMusicId;
    name: string;
    album: string;
    author: string;
    duration: string;
    image?: string;
    music?: IMusic;
    userId: string;
    url?: string
}

export interface IMusicPaginate {
    getPaginateMusic: IMusic[]
}

export interface IMusicPaginateProps {
    size: number;
    page: number;
}