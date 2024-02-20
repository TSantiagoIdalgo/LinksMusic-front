type PlaylistId = `${string}-${string}-${string}-${string}-${string}`

export interface IPlaylist {
    id: PlaylistId;
    tittle: string;
    description: string;
    likes: number;
    dislikes: number;
    userId: string;
}

export interface IPlaylistLikes {
    dislike: number;
    like: number;
    playlistId: PlaylistId;
    userId: string;
}