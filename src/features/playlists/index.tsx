import {Column} from "../../components/FlexBox.tsx";
import {Playlist} from "../../types.ts";
import {PlaylistRow} from "./PlaylistRow.tsx";
import styled from "styled-components";

const List = styled(Column)`
    padding-top: 32px;
`;

type Props = {
    selectedPlaylist: string | null,
    playlists: Playlist[]
}

export const Playlists = ({selectedPlaylist, playlists}: Props) => {

    return (
        <List $gap={'10px'}>
            {playlists.map(({name}) => (
                <PlaylistRow name={name} selected={selectedPlaylist === name}/>
            ))}
        </List>
    );
};
