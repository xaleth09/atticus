import {useCallback, useState} from 'react';
import {MdAddCircleOutline} from "react-icons/md";
import {useAddSongToPlaylist} from "./hooks/useAddSongToPlaylist.ts";
import styled from "styled-components";
import {Column} from "../../components/FlexBox.tsx";
import {useGetPlaylistNames} from "./hooks/useGetPlaylistNames.ts";

const PlaylistPopover = styled(Column)`
    position: absolute;
    height: 200px;

`;

const IconButton = styled.div`
    cursor: pointer;
`;

type Props = {
    songIdentifier: string;
}

export const AddToPlaylistButton = ({songIdentifier}: Props) => {
    const [showPlaylistList, setShowPlaylistList] = useState(false);

    const {addSongToPlayList} = useAddSongToPlaylist();
    const {playlists} = useGetPlaylistNames();

    const handleShowPlayListPopover = useCallback(() => {
        setShowPlaylistList(!showPlaylistList);
    }, [showPlaylistList]);

    return (
        <>
            <IconButton onClick={handleShowPlayListPopover}>
                <MdAddCircleOutline/>
            </IconButton>
            {showPlaylistList ? <PlaylistPopover/> : null}
        </>
    );
};
