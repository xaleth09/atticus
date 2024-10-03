export interface Song {
    title: string;
    album: string;
    artist: string;
    song_length: string;
}

export interface Album {
    name: string;
    artist: string;
    songs: Song[];
}

export interface Artist {
    name: string;
    albums: Album[];
}
