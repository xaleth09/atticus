import {Song} from '../../types.ts';
import {Column, Row} from '../../components/FlexBox.tsx';
import {useMemo, useState} from 'react';
import styled from 'styled-components';
import {IoMdClock} from 'react-icons/io';
import {SongRow} from "./SongRow.tsx";
import {Cell} from "./Cell.tsx";
import {COLUMN_WIDTHS} from "./constants.ts";


type SortOptions = 'song_length' | 'album' | 'title' | 'artist';

const List = styled(Column)`
    width: 100%;
    background-color: lightskyblue;
`;

const SortableHeaderTag = styled(Cell)<{ $sorted: boolean }>`
    cursor: pointer;
`;

type Props = {
    songs: Song[];
};

export const SongList = ({songs}: Props) => {
    const [sort, setSort] = useState<SortOptions>('title');

    const sortedSongs = useMemo(() => {
        const songsCopy = [...songs];

        songsCopy.sort((a, b) => {
            switch (sort) {
                case 'song_length':
                    return Number(a.song_length) - Number(b.song_length);
                case 'album':
                    return a.album.localeCompare(b.album);
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'artist':
                    return a.artist.localeCompare(b.artist);
                default:
                    return 0;
            }
        });

        return songsCopy;
    }, [sort, songs]);
    return (
        <List $gap={'10px'}>
            <Row>
                <Cell $width={COLUMN_WIDTHS.number}>
                    <span>#</span>
                </Cell>
                <SortableHeaderTag $width={COLUMN_WIDTHS.title} $sorted={sort === 'title'}>
                    <span>Title</span>
                </SortableHeaderTag>
                <SortableHeaderTag $width={COLUMN_WIDTHS.artist} $sorted={sort === 'artist'}>
                    <span>Artist</span>
                </SortableHeaderTag>
                <SortableHeaderTag $width={COLUMN_WIDTHS.album} $sorted={sort === 'album'}>
                    <span>Album</span>
                </SortableHeaderTag>
                <SortableHeaderTag $width={COLUMN_WIDTHS.duration} $sorted={sort === 'song_length'}>
                    <IoMdClock/>
                </SortableHeaderTag>
                <Cell/>
            </Row>
            {sortedSongs.map(({title, album, artist, song_length}, index) => (
                <SongRow songNum={index} title={title} album={album} artist={artist} songLength={song_length}/>
            ))}
        </List>
    );
};
