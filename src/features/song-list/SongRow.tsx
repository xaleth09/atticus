import {Row} from "../../components/FlexBox.tsx";
import {AlbumArt} from "../album/AlbumArt.tsx";
import {Song} from "../../types.ts";
import {formatDuration} from "./util.ts";
import {COLUMN_WIDTHS} from "./constants.ts";
import {Cell} from "./Cell.tsx";
import {AddToPlaylistButton} from "../playlists/AddToPlaylistButton.tsx";
import {useMemo} from "react";


type Props = Pick<Song, 'title' | 'album' | 'artist'> & {
    songNum: number;
    songLength: string, //Pick<Song, 'song_length'>
}

export const SongRow = ({
                            songNum,
                            title,
                            album,
                            artist,
                            songLength,
                        }: Props) => {

    const songIdentifier = useMemo(() => `${title}-${album}-${artist}-${songLength}`, [album, artist, songLength, title]);

    return (
        <Row key={songIdentifier} $crossAxisAlignment="center">
            <Cell $width={COLUMN_WIDTHS.number}>
                <span>{songNum + 1}</span>
            </Cell>
            <Cell $width={COLUMN_WIDTHS.title}>
                <Row $gap="8px">
                    <AlbumArt/>
                    <span>{title}</span>
                </Row>
            </Cell>
            <Cell $width={COLUMN_WIDTHS.artist}>
                <span>{artist}</span>
            </Cell>
            <Cell $width={COLUMN_WIDTHS.album}>
                <span>{album}</span>
            </Cell>
            <Cell $width={COLUMN_WIDTHS.duration}>
                <span>{formatDuration(songLength)}</span>
            </Cell>
            <Cell $width={COLUMN_WIDTHS.addButton} $mainAxisAlignment={'center'}>
                <AddToPlaylistButton songIdentifier={songIdentifier}/>
            </Cell>
        </Row>
    );
};
