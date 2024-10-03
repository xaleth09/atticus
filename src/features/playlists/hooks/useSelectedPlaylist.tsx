import {useState} from "react";

export const useSelectedPlaylist = () => {
    const [internalSelectedPlaylist, setInternalSelectedPlaylist] = useState('Playlist3');

    const setSelectedPlaylist = () => {

    };


    return {
        selectedPlaylist: internalSelectedPlaylist,
        setSelectedPlaylist
    };
};
