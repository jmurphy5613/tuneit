import axios from "axios";
import { Song, PlayableTrack } from "../types";

export const getEveryPublicTrack = async (accessToken: string) => {
    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        const playlistsResponse = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers,
            params: {
                limit: 50,
                offset: 0,
                public: true
            }
        });

        console.log(playlistsResponse)

        const playlistPromises = playlistsResponse.data.items.map(async (playlist: any) => {
            const tracksResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
                headers
            });

            return tracksResponse.data.items;
        });

        const playlistTracks = await Promise.all(playlistPromises);
        const allTracks = playlistTracks.flat();

        return allTracks;
    } catch (error) {
        throw new Error('Failed to retrieve tracks from Spotify API.');
    }

}

// export const getGamePlayableTrackData = (tracks: Song[]) => {
//     const playableTracks: Song[] = [];

//     tracks.forEach((track: Song) => {
//         if (track.preview_url) {
//             const existingTrack = playableTracks.find((playableTrack) => playableTrack.song.id === track.id);

//             if (existingTrack) {
//                 existingTrack.instances++;
//                 existingTrack.playlists.push(track.playlistName);
//             } else {
//                 const newTrack = {
//                     song: track,
//                     instances: 1,
//                     playlists: [track.playlistName]
//                 };
//                 playableTracks.push(newTrack);
//             }
//         }
//     });

//     return playableTracks;
// }