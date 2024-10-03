import './App.css';
import {PageWithSidebar} from "./components/PageWithSidebar";
import {SongList} from "./features/song-list";
import {useEffect, useState} from "react";
import {Playlists} from "./features/playlists";

const DUMMY_PLAYLISTS = [
    {name: 'Playlist1', songs: []},
    {name: 'Playlist2', songs: []},
    {name: 'Playlist3', songs: []},
    {name: 'Playlist4', songs: []},
    {name: 'Playlist5', songs: []}
];

function App() {
    const [selectedPlaylist, setSelectedPlaylist] = useState('Playlist3');
    const [librarySongs, setLibrarySongs] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch('https://storage.googleapis.com/atticus-frontend-assessment/api/songs.json');
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const {songs} = await response.json();
                // const processedData = processSongsData(data.songs);
                setLibrarySongs(songs);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchSongs();
    }, []);

    console.table('app', librarySongs);


    return (
        <PageWithSidebar>
            <PageWithSidebar.Sidebar>
                <Playlists playlists={DUMMY_PLAYLISTS} selectedPlaylist={selectedPlaylist}/>
            </PageWithSidebar.Sidebar>
            <PageWithSidebar.MainContent>
                <SongList songs={librarySongs}/>
            </PageWithSidebar.MainContent>
        </PageWithSidebar>
    );
}

export default App;
