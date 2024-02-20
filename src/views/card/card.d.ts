export interface ICard {
    id: string;
    image: string | undefined;
    author: string;
    name: string
}

export interface ICardProps {
    getMusicByAuthor: ICard[]
}